import clsx from 'clsx'

const aegList = [
    {
        image: '/component_two/Image-01.jpg',
        alt: 'image alt here',
        title: 'Summer Lunch Menu By Mark Best',
        description: "AEG ambassador Mark Best's summer eats are guaranteed to help you make the most of the warmer weather and entertaining at home."
    },
    {
        image: '/component_two/Image-02.jpg',
        alt: 'image alt here',
        title: 'A Traditional Christmas Eve, Mark Best Style',
        description: "One of Australia's best chefs and AEG ambassador, Mark Best, shares his favourite Christmas Eve menu which is sure to impress your guests."
    },
    {
        image: '/component_two/Image-03.jpg',
        alt: 'image alt here',
        title: 'Taking Taste Further',
        description: "This exclusive cookbook gives you all the know-how you need We've designed it to make sure you get the most out of our products - and the best out of your food."
    }
]

export default function Home() {
    return (
        <>
            <main className={clsx([
                'w-[min(1200px,100%-2rem)] mx-auto',
                '[&>section]:min-h-screen',
                'flex flex-col'
            ])}>
                {/* First block */}
                <section className={clsx([
                    'grid grid-cols-3 grid-rows-2 gap-5',
                    'py-40'
                ])}>
                    <img src={'/component_one/Image-01.jpg'} alt='man walking with a kid'
                         className='col-start-1 col-end-2 row-start-1 row-end-3'/>
                    <img src={'/component_one/Image-02.jpg'} alt='fruits'
                         className='col-start-2 col-end-3 row-start-1 row-end-2'/>
                    <img src={'/component_one/Image-03.jpg'} alt='asparagus'
                         className='col-start-2 col-end-3 row-start-2 row-end-3'/>
                    <div className={clsx([
                        'col-start-3 col-end-4 row-start-1 row-end-3',
                        'flex flex-col gap-3 py-2'
                    ])}>
                        <h5 className='uppercase text-[28px] font-light'>Answer your body&apos;s needs</h5>
                        <hr/>
                        <p className='text-brand-secondary font-light text-lg mt-2 leading-[1.7]'>The way ingredients
                            are sourced affects the way we nourish our bodies. Author Mark Schatzer believes our body
                            naturally develops an appetite for the foods and nutrients it needs to be healthy, but that
                            artificial flavourings are getting in the way. This can be reversed by focusing on
                            high-quality ingredients and being mindful as your appetite guides you to consume according
                            to your body&apos;s needs.</p>
                        <h6 className='text-brand-primary uppercase text-md font-medium tracking-wide mt-5'>Be
                            mindful</h6>
                        <p className='text-lg font-medium leading-[1.7]'>Sourcing local or organic food is a good way to
                            start being more mindful about what you&apos;re cooking and eating.</p>
                    </div>
                    {/* Second block */}
                </section>
                <section id={'aeg'} className='flex flex-col gap-14 justify-center items-center'>
                    <h1 className='text-4xl font-light uppercase tracking-wide'>All the latest from AEG</h1>
                    <div className='w-full h-full min-h-[450px] grid grid-cols-3 gap-5'>
                        {
                            aegList.map(item => (
                                <a href={''} className='flex flex-col gap-5' key={JSON.stringify(item)}>
                                    <img src={item.image} alt={item.alt} draggable={false} className='border-b-4 border-brand-primary mb-2' />
                                    <p className='font-bold text-md'>{item.title}</p>
                                    <p className='text-brand-sub font-sm'>{item.description}</p>
                                    <p className='uppercase text-md tracking-wide border-b border-brand-primary w-max pb-1'>Read more</p>
                                </a>
                            ))
                        }
                    </div>
                </section>
            </main>
        </>
    )
}
