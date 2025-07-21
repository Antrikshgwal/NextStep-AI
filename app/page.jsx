import Image from "next/image";
import { Button } from "../components/ui/button";
import HeroSection from "../components/Hero";
import { features } from "../data/features";
import { Card, CardContent } from "../components";
import { howItWorks } from "../data/howItWorks";
import { testimonial } from "../data/testimonial";
import { faqs } from "../data/faqs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import Link from "next/link";
import { ArrowRight} from "lucide-react";

export default function Home() {
  return (
    <div>
      <div className="grid-background"></div>
      <HeroSection />
      <section className="w-full py-10 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12  ">
            Powerful features for your career growth
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6  max-w-6xl mx-auto">
            {features.map((feature, index) => {
              return (
                <Card
                  key={index}
                  className="border-2 hover:border-primary transition-colors duration-300"
                >
                  <CardContent className="pt-6 text-center flex flex-col items-center">
                    <div className="flex flex-col items-center justify-center">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="w-full py-10 md:py-24 lg:py-32 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6  max-w-6xl mx-auto">
            <div className="flex flex-col items-center justify-center space-y-2">
              <h3 className="text-4xl font-bold">50+</h3>
              <p className="text-muted-foreground text-center flex flex-col  ">
                industries covered
              </p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <h3 className="text-4xl font-bold">1000+</h3>
              <p className="text-muted-foreground">interview questions</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <h3 className="text-4xl font-bold">95%</h3>
              <p className="text-muted-foreground">Success rate</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <h3 className="text-4xl font-bold">24/7</h3>
              <p className="text-muted-foreground">AI support</p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-10 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mx-auto mb-12  max-w-3xl">
            <h2 className="text-3xl font-bold mb-4  ">How it works</h2>
            <p className="text-muted-foreground ">
              Four simple steps to accelerate your career growth
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6  max-w-6xl mx-auto">
            {howItWorks.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col items-center text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold ">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="w-full py-10 md:py-24 lg:py-32 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12  ">
            What our users say?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8  max-w-6xl mx-auto">
            {testimonial.map((test, index) => {
              return (
                <Card key={index} className="bg-background">
                  <CardContent className="pt-6 ">
                    <div className="flex flex-col space-y-4">
                      <div className="flex items-center space-x-4">
                        <div className="relative h-12 w-12 flex-shrink-0">
                          <Image
                            width={40}
                            height={40}
                            src={test.image}
                            alt={test.author}
                            className="rounded-full object-cover border-2 border-primary/20"
                          />
                        </div>
                        <div>
                          <p className="font-semibold">{test.author}</p>
                          <p className=" text-sm text-muted-foreground">
                            {test.role}
                          </p>
                          <p className="text-sm test-primary">{test.company}</p>
                        </div>
                      </div>
                      <blockquote>
                        <p className="relative text-muted-foreground italic">
                          <span className="text-xl text-primary absolute  -left-2">
                            &quot;
                          </span>
                          {test.quote}
                          <span className="text-xl text-primary absolute ">
                            &quot;
                          </span>
                        </p>
                      </blockquote>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="w-full py-10 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mx-auto mb-12  max-w-3xl">
            <h2 className="text-3xl font-bold mb-4  ">
              Frequently asked questions
            </h2>
            <p className="text-muted-foreground ">
              Find answers to common question about out platform
            </p>
          </div>
          <div className="max-6xl font-bold mb-4">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => {
                return (
                  <div
                    className="max-w-6xl mx-auto"
                    key={index}
                  >

                      <AccordionItem key={index} value={`item-${index}`} className="flex flex-col w-max-4xl ">
                        <AccordionTrigger>{faq.question}</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                      </AccordionItem>

                  </div>
                );
              })}
            </Accordion>
          </div>
        </div>
      </section>
      <section className="w-full">
        <div className="mx-auto py-24 rounded-lg gradient">
          <div className=" items-center justify-center text-center space-y-4 max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold tracking-tighter text-primary-foreground md:text-4xl lg:text-5xl">
Ready to Explore
            </h2>
            <p className="mx-auto max-w-[600] text-primary-foreground/80 md:text-xl">
Join thousands of individual who are advancing their career with AI-powered guidance
            </p>
            <Link href="/dashboard" passHref>
            <Button
            size="lg"
            variant="secondary"
            className="h-12 mt-5 animate-bounce">
Start your journey today! <ArrowRight className="h-6 w-6 ml-2" />
            </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
