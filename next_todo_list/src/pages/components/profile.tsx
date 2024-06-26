import Image from 'next/image'

export default function profile() {
    return(
        <section>
            <div className="grid grid-rows-3 grid-flow-col gap-4">
                <div className="row-span-3">
                    <Image
                        src="/profile.png"
                        width={500}
                        height={500}
                        alt="Picture of the developer"
                        className='rounded-full'
                    />
                </div>

                <div className="row-span-3">
                    <div>Mfuneko Mfsi April is a Full Stack developer fluent in .Net Developer.</div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                        ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
        </section>
    );
}