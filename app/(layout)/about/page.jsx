import React from "react";
import Image from "next/image";
import logo from "@/public/images/Logo.png";

function About(){
    return(
        <section className="flex flex-col items-center my-5">
            <h1>About <span className="blue_gradient">CityGems</span></h1>
            <div className="flex text-center flex-col md:w-2/5 my-5 py-10 px-11 shadow-lg bg-zinc-900 rounded-2xl leading-[1.8]">
                <p>Embark on a captivating journey with CityGems, your digital compass to the world's most enchanting cities. Immerse yourself in a symphony of urban landscapes as you navigate through a vast repository of destinations waiting to be discovered. Our meticulously designed platform seamlessly integrates exploration and personalization, allowing you to delve into the heart of each city, uncovering its unique allure.
                </p>
                <Image src={logo} className="self-center mt-5" alt="Logo image for City Gems"/>
                <br />
                <p>With a user-friendly interface, CityGems is your virtual passport to a kaleidoscope of experiences. Effortlessly search for cities that resonate with your desires, from the iconic skylines of bustling metropolises to the hidden treasures nestled off the beaten path. Uncover the pulse of each destination, explore its rich history, vibrant culture, and distinctive character—all at your fingertips.</p>
                <br />
                <p>But the journey doesn't end there. CityGems goes beyond exploration; it's a sanctuary for your city dreams. Save and curate your favorite cities seamlessly, building a personalized collection that reflects your travel aspirations. Each click is a step towards creating your own narrative of urban wonders.</p>
                <br />
                <p>Whether you're a seasoned traveler seeking the next adventure or an armchair explorer craving inspiration, CityGems invites you to redefine your relationship with cities. Join us on a limitless voyage of discovery, where the world's metropolises become chapters in your story. Start your exploration today and let CityGems be the companion on your odyssey of cityscape wonders.</p>
            </div>
        </section>
    );
}

export default About;