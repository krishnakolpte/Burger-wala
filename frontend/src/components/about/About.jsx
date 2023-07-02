/** @format */

import React from "react";
import { RiFindReplaceFill } from "react-icons/ri";
import me from "../../assets/founder.JPG";

function About() {
    return (
        <section className="about">
            <main>
                <h1>About Us</h1>
                <article>
                    <h4>MBA Buger Wala</h4>
                    <p>
                        MBA Burger Wala. the place for maost tasty burgers on
                        the planet.
                    </p>
                    <p>
                        Explore various types of food & burgers click below to
                        see
                    </p>

                    <a href="#menu">
                        <RiFindReplaceFill />
                    </a>
                </article>
                <div>
                    <h2>Founder</h2>
                    <article>
                        <div>
                            <img
                                src={me}
                                alt="Founder"
                            />
                            <h3>Krishna Kolapte</h3>
                        </div>
                        <div>
                            <p>
                                Hey, I am Krishna kolapte, the founder of MBA
                                Burger Wala.
                                <br />
                                Our aim is to create the most tasty burger on
                                planet.
                            </p>
                        </div>
                    </article>
                </div>
            </main>
        </section>
    );
}

export default About;
