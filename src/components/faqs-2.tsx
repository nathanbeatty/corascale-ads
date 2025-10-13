'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Link from 'next/link'

export default function FAQsTwo() {
    const faqItems = [
  {
    id: 'item-1',
    question: 'How does your outbound system work?',
    answer:
      'We handle the entire outbound process — from crafting your messaging and building targeted prospect lists, to sending personalized emails and booking meetings directly on your calendar. You simply show up to qualified calls with your ideal clients.',
  },
  {
    id: 'item-2',
    question: 'Who do you work with?',
    answer:
      'We work exclusively with consultants who have a clear offer and defined target audience. If you’re looking to consistently book qualified calls and grow through outbound, we can help.',
  },
  {
    id: 'item-3',
    question: 'How many meetings can I expect per month?',
    answer:
      'Our clients typically see between 5–10 qualified meetings per month, depending on your market size, offer, and response rate. We continuously optimize campaigns to maintain consistent results.',
  },
  {
    id: 'item-4',
    question: 'What does it cost to work with you?',
    answer:
      'We charge a flat $2,500 per month, which covers everything — strategy, copy, data, and execution. There are no hidden fees or commissions. You can pause or cancel anytime.',
  },
  {
    id: 'item-5',
    question: 'How quickly can we get started?',
    answer:
      'Our onboarding process takes about two weeks. This allows us to properly warm up domains, align on strategy, craft your messaging, and set up the systems for long-term deliverability and performance.',
  },
  {
    id: 'item-6',
    question: 'Do you handle replies and calendar booking?',
    answer:
      'Yes. We manage your inbox, handle positive replies, and book meetings directly on your calendar with your qualified prospects — saving you from daily inbox management.',
  },
  {
    id: 'item-7',
    question: 'What happens if I don’t get results?',
    answer:
      'If you don’t get booked meetings within the first month, we’ll continue working with you at no additional cost until you do. Our focus is on performance and long-term partnerships.',
  },
]


    return (
        <section className="py-10 md:py-16">
            <div className="mx-auto max-w-5xl">
                <div className="mx-auto max-w-xl text-center">
                    <h2 className="text-balance text-3xl font-semibold">FAQ</h2>
                </div>

                <div className="mx-auto mt-5 max-w-3xl">
                    <Accordion
                        type="single"
                        collapsible
                        className="bg-card ring-muted w-full rounded-2xl border px-5 py-3 shadow-sm ">
                        {faqItems.map((item) => (
                            <AccordionItem
                                key={item.id}
                                value={item.id}
                                className="border-dashed">
                                <AccordionTrigger className="cursor-pointer text-base hover:no-underline">{item.question}</AccordionTrigger>
                                <AccordionContent>
                                    <p className="text-base">{item.answer}</p>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>

                    <p className="text-muted-foreground text-center text-sm mt-6 px-8">
                        Can't find what you're looking for? Book a strategy session below and we'll exlore your challenges in more detail.
                        
                    </p>
                </div>
            </div>
        </section>
    )
}
