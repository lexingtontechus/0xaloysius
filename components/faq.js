import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import { Collapse } from "@nextui-org/react";
import Link from "next/link";

export default function Faq() {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        <Disclosure>
          {({ open }) => (
            <>
              <Collapse.Group
                splitted
                className="text-trueZinc-700 dark:text-trueZinc-100"
              >
                <Collapse
                  title="How do I work with 0xaloysius?"
                  expanded
                  arrowIcon={
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-truePurple-900`}
                    />
                  }
                >
                  <p className="text-sm text-trueZinc-700">
                    The 0x portfolio partners with & employs people with a wide
                    range of skills & experience.
                  </p>
                </Collapse>
                <Collapse
                  title="Is 0xaloysius hiring?"
                  arrowIcon={
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-truePurple-900`}
                    />
                  }
                >
                  <p className="text-sm text-trueZinc-700">
                    Our portfolio businesses are hiring! Book a meeting with me
                    to discuss new possibilities.
                  </p>
                </Collapse>
                <Collapse
                  title="Who is 0xaloysius?"
                  arrowIcon={
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-truePurple-900`}
                    />
                  }
                >
                  <p className="text-sm text-trueZinc-700">
                    Book an introduction call with me!
                  </p>
                </Collapse>
                <Collapse
                  title="How do I work with 4MoBeers?"
                  arrowIcon={
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-truePurple-900`}
                    />
                  }
                >
                  <p className="text-sm text-trueZinc-700">
                    We love colabs! Send us a message or Beer Us!
                  </p>
                </Collapse>
              </Collapse.Group>
            </>
          )}
        </Disclosure>
      </div>
    </Container>
  );
}
