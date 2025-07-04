export default function Benefits() {
  const benefits = [
    { title: 'Proven Method', desc: 'Science-backed approach to quit smoking' },
    { title: 'Personal Support', desc: '24/7 guidance throughout your journey' },
    { title: 'Lasting Results', desc: 'Build habits that stick for life' }
  ]

  return (
    <section className='py-16 bg-white'>
      <div className='max-w-6xl mx-auto px-4'>
        <h2 className='text-3xl font-bold text-center mb-12'>Why Choose Chaika?</h2>
        <div className='grid md:grid-cols-3 gap-8'>
          {benefits.map((benefit, i) => (
            <div key={i} className='text-center p-6'>
              <h3 className='text-xl font-semibold mb-4'>{benefit.title}</h3>
              <p className='text-gray-600'>{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}