'use client'

import { Input } from './input'
import { Button } from './button'
import { useState } from 'react'
import { ArrowRight, CircleCheck } from 'lucide-react'

export default function EmailSubmit() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    brokerage: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setResult('')
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
      formdata.append('brokerage', formData.brokerage || '')
      formdata.append('access_key', 'fab20e4c-125f-450a-867f-7a097202b646') // replace with your Web3Forms access key

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body:formdata,
      })

      const data = await res.json()

      if (data.success) {
        setResult('✅ Form Submitted Successfully')
        setSubmitted(true)
        setFormData({ name: '', email: '', brokerage: '' })
      } else {
        setResult(data.message || 'Error submitting form.')
      }
    } catch (err) {
      console.error(err)
      setResult('Error submitting form. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full mt-5 p-6 border rounded-2xl border-black overflow-hidden tracking-tight">
      <p className="mb-5 font-semibold">Inquiry Form</p>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="grid gap-4">
          <div>
            <span className="text-xs">Full Name</span>
            <Input
              name="name"
              type="text"
              placeholder="John Smith"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <span className="text-xs">Business Email</span>
            <Input
              name="email"
              type="email"
              placeholder="name@your-email.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <span className="text-xs">Business Name</span>
            <Input
              name="business"
              type="text"
              placeholder="Your Business"
              value={formData.brokerage}
              onChange={handleChange}
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}
          {result && <p className="text-green-500 text-sm">{result}</p>}

          <Button type="submit" size="xl" variant="default" disabled={loading}>
            {loading ? 'Submitting...' : 'Submit'} <ArrowRight />
          </Button>
        </form>
      ) : (
        <span className="text-left text-black rounded-2xl flex items-center gap-2 font-medium">
          <CircleCheck className = "text-green-500"/>Thank you! We will reach out soon.
        </span>
      )}
    </div>
  )
}
