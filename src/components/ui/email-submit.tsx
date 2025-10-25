'use client'
import { Input } from './input'
import { Button } from './button'
import { useState } from 'react'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export default function EmailSubmit() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    if (!formData.name || !formData.email) {
      setError('Name and email are required.')
      setLoading(false)
      return
    }

    try {
      const formdata = new FormData()
      formdata.append('name', formData.name)
      formdata.append('email', formData.email)
      formdata.append('business', formData.business || '')
      formdata.append('access_key', 'fab20e4c-125f-450a-867f-7a097202b646')

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formdata,
      })

      const data = await res.json()

      if (data.success) {
        setSubmitted(true)
        setFormData({ name: '', email: '', business: '' })
      } else {
        setError(data.message || 'Something went wrong. Please try again.')
      }
    } catch (err) {
      console.error(err)
      setError('Unable to submit. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full">
      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Full Name
            </label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="John Smith"
              value={formData.name}
              onChange={handleChange}
              required
              className="h-11"
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Business Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="john@company.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="h-11"
            />
          </div>

          {/* Business (optional) */}
          <div className="space-y-2">
            <label htmlFor="business" className="text-sm font-medium">
              Company Name <span className="text-muted-foreground">(optional)</span>
            </label>
            <Input
              id="business"
              name="business"
              type="text"
              placeholder="Acme IT Services"
              value={formData.business}
              onChange={handleChange}
              className="h-11"
            />
          </div>

          {/* Error message */}
          {error && (
            <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-600 text-sm">
              {error}
            </div>
          )}

          {/* Submit button */}
          <Button 
            type="submit" 
            size="lg" 
            className="w-full h-11 gap-2" 
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'Submit'}
            {!loading && <ArrowRight className="w-4 h-4" />}
          </Button>

          {/* Privacy note */}
          <p className="text-xs text-center text-muted-foreground">
            We'll never share your information. No spam, ever.
          </p>
        </form>
      ) : (
        <div className="py-8 text-center space-y-3">
          <div className="flex justify-center">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-green-600" />
            </div>
          </div>
          <div className="space-y-1">
            <h3 className="font-semibold text-lg">You're all set!</h3>
            <p className="text-muted-foreground text-sm">
              We'll reach out within 2 hours to schedule your call.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}