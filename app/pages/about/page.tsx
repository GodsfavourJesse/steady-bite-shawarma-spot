"use client"

export default function AboutPage() {
    return (
        <section className="max-w-7xl mx-auto px-4 pb-10 md:pb-16 pt-10 text-gray-800">
            <h1 className="text-center text-4xl font-fondamento font-bold mb-5">About Us</h1>

            <img 
                src="/banner-2.jpg" 
                alt="banner"
                className=" w-[400px] h-[400px] mb-10"
            />

            <div className="w-full flex flex-col gap-4">

                <p className="md:text-[18px]">Welcome to Steady Bite Shawarma Spot — where shawarma dreams come true! We’re all about passion, freshness, and flavor, serving you the very best shawarma experience in town.</p>

                <p className="md:text-[18px]">At Steady Bite, we specialize in mouthwatering shawarma made with love and quality ingredients. Whether you crave Chicken, Beef, or our special Chicken & Beef mix, every bite is a burst of flavor that keeps you coming back for more.</p>

                <p className="md:text-[18px]">What started as a small local shawarma stand has grown into a go-to spot for everyone who loves tasty, well-prepared street food. Our mission is simple — to deliver the best shawarma experience with consistent quality and warmth.</p>

                <p className="md:text-[18px]">We use only the freshest ingredients, seasoned and grilled to perfection. Each shawarma is carefully wrapped with rich sauces and fresh vegetables, giving you that unforgettable Steady Bite taste.</p>

                <p className="md:text-[18px]">In addition to our famous shawarma, we also serve perfectly toasted bread — a crunchy, satisfying snack that pairs beautifully with our signature fillings and sauces.</p>

                <p className="md:text-[18px]">At Steady Bite Shawarma Spot, our vision is to be the home of good taste and happy moments. We’re here to satisfy your cravings, one bite at a time!</p>

            </div>


        </section>
    )
}