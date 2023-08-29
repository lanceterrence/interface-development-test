import clsx from 'clsx'

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
                            start being more mindful about what you're cooking and eating.</p>
                    </div>
                    {/* Second block */}
                </section>
                <section className='flex flex-col gap-14 justify-center items-center'>
                    {/*<h1 className='text-4xl font-light uppercase tracking-wide'>All the latest from AEG</h1>*/}
                    {/*<div className='w-full h-full min-h-[450px] border'>*/}
                    {/*    test*/}
                    {/*</div>*/}
                </section>
            </main>
        </>
    )
}
