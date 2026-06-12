import CurrentYear from "./components/current-year";
import ContentTabs from "./components/content-tabs";
import { FaYoutube, FaInstagram } from "react-icons/fa";

const videos = [
  {
    id: "dominion",
    title: "What animals go through",
    mobileTitle: "Animals",
    panel: (
      <>
        <p className="pb-2">
          <strong>Dominion</strong> is an award-winning documentary narrated by
          Joaquin Phoenix. Using drones, hidden cameras, and handheld footage,
          it exposes the brutal reality of modern animal agriculture and
          questions the morality of humanity&apos;s dominion over the animal
          kingdom.
        </p>
        <iframe
          src="https://iframe.mediadelivery.net/embed/135301/89232d42-e290-40fc-917d-5669478ee73b?autoplay=true&amp;loop=false&amp;muted=false&amp;preload=true&amp;captions=au&amp;t=40s"
          title="What animals go through"
          allowFullScreen
          className="w-full md:h-96 lg:h-[500px]"
        />
      </>
    ),
  },
  {
    id: "speech",
    title: "Veganism (talk)",
    mobileTitle: "Veganism",
    panel: (
      <>
        <p className="pb-2">
          Gary Yourofsky&apos;s{" "}
          <strong>Greatest speech you&apos;ll ever hear</strong> is one of the
          most thought-provoking talks you&apos;ll ever watch on the treatment
          of animals. He cuts through excuses and challenges viewers to confront
          questions most people never seriously consider. If you appreciate
          straight talk that makes you think long after it&apos;s over, this
          speech deserves your attention.
        </p>
        <iframe
          src="https://iframe.mediadelivery.net/embed/245757/2a6340bf-0355-4387-8ce1-1a8e6ff74dfe?autoplay=true&amp;loop=false&amp;muted=false&amp;preload=true&amp;captions=en"
          title="Veganism (talk)"
          allowFullScreen
          className="w-full md:h-96 lg:h-[500px]"
        />
      </>
    ),
  },
  {
    id: "planet",
    title: "What animal agriculture does to the environment",
    mobileTitle: "Planet",
    panel: (
      <>
        <p className="pb-2">
          Animal agriculture is tearing down forests, driving species into
          extinction, draining vast amounts of land and water, and pumping huge
          quantities of greenhouse gases into the atmosphere. A plant-based diet
          can dramatically shrink that destruction, while industrial animal
          farming keeps pushing ecosystems toward collapse.
        </p>
        <p className="pb-2">
          The award winning documentary <em>Eating Our Way to Extinction</em>{" "}
          explores that destruction in detail, connecting meat and dairy
          production to climate change, species loss, and the unraveling of the
          natural world.
        </p>
        <iframe
          src="https://www.youtube.com/embed/KcJyXjs65rE?si=06YtUFrTDjbUCkfe"
          title="What animal agriculture does to the environment"
          allowFullScreen
          className="w-full md:h-96 lg:h-[500px]"
        />
      </>
    ),
  },
] as const;

const resources = [
  {
    id: "challenges",
    title: "Vegan challenges",
    mobileTitle: "Challenges",
    panel: (
      <div className="min-h-[200px] p-4">
        <h2 className="pb-4 text-xl font-semibold">Vegan challenges to try</h2>
        <ul className="list-disc space-y-3 pl-5">
          <li>
            <a href="https://challenge22.com/" target="_blank">
              Challenge 22
            </a>{" "}
            - A free 22-day challenge with personal mentors, meal plans, help
            from registered nutritionists and dieticians, and a strong
            community. A great way to get started.
          </li>
          <li>
            <a href="https://veganuary.com/" target="_blank">
              Veganuary
            </a>{" "}
            - The best-known vegan challenge, with daily emails, recipes, and
            practical guides that give you a broad introduction to veganism.
          </li>
          <li>
            <a href="https://veganbootcamp.org/" target="_blank">
              Vegan Bootcamp
            </a>{" "}
            - A free, self-paced program with different tracks covering
            nutrition, cooking, fitness, the environment, and animal welfare.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "food",
    title: "Finding food",
    mobileTitle: "Food",
    panel: (
      <div className="min-h-[200px] p-4">
        <h2 className="pb-4 text-xl font-semibold">
          Vegan food and recipe resources
        </h2>
        <ul className="list-disc space-y-3 pl-5">
          <li>
            <a href="https://www.happycow.net/" target="_blank">
              Happy Cow
            </a>{" "}
            - The go-to app for finding vegan restaurants, cafes, and
            veg-friendly spots wherever you are.
          </li>
          <li>
            <a href="https://rainbowplantlife.com" target="_blank">
              Rainbow Plant Life
            </a>{" "}
            - Best for flavor-packed, modern vegan cooking, with excellent
            curries, comfort food, meal prep ideas, and detailed cooking tips
            from Nisha Vora.
          </li>
          <li>
            <a href="https://www.pickuplimes.com/" target="_blank">
              Pick Up Limes
            </a>{" "}
            - Calm, approachable vegan recipes and nutrition content that make
            everyday plant-based eating feel simple and sustainable.
          </li>
          <li>
            <a href="https://plantbasedonabudget.com/" target="_blank">
              Plant Based on a Budget
            </a>{" "}
            - Great if you want cheap, practical vegan meals without making food
            feel bland or limiting.
          </li>
          <li>
            <a href="https://nutritionfacts.org/daily-dozen" target="_blank">
              NutritionFacts Daily Dozen
            </a>{" "}
            - A simple checklist that helps you build a more balanced,
            evidence-based whole-food plant-based diet.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "guides",
    title: "Guides",
    mobileTitle: "Guides",
    panel: (
      <div className="min-h-[200px] p-4">
        <h2 className="pb-4 text-xl font-semibold">Practical vegan guides</h2>
        <ul className="list-disc space-y-3 pl-5">
          <li>
            <a
              href="https://docs.google.com/document/d/13OGWwR1ZR_qQ_UMmazYHmz0Aj-cfCJ47ul0QHO8eA8w/edit?tab=t.0"
              target="_blank"
            >
              Advice for new vegans
            </a>{" "}
            - A detailed Google doc written by a vegan who wishes he could have
            gone back in time and read this guide at the start.
          </li>
          <li>
            <a
              href="https://www.vegansociety.com/go-vegan/how-go-vegan"
              target="_blank"
            >
              The Vegan Society: How to go vegan
            </a>{" "}
            - A straightforward beginner guide covering food, shopping, and the
            practical basics of making the switch.
          </li>
          <li>
            <a href="https://nutritionfacts.org/" target="_blank">
              NutritionFacts.org
            </a>{" "}
            - Evidence-focused information on plant-based nutrition, health, and
            disease prevention from a whole-food perspective.
          </li>
          <li>
            <a href="https://veganhealth.org/" target="_blank">
              Vegan Health
            </a>{" "}
            - A reliable resource for the nutritional details of vegan diets,
            including supplements, nutrients, and planning well.
          </li>
        </ul>
      </div>
    ),
  },
] as const;

export default function Home() {
  return (
    <div className="flex min-h-full flex-col">
      <div>
        <div className="pt-2 text-3xl">
          Empathy for <s>humans</s> animals
        </div>
        <div className="py-2">
          <p>
            What if aliens landed on earth and started to mass breed in massive
            farms for food, entertainment and clothing? Would you accept that
            fate just because they are intellectually vastly superior or would
            you demand that the aliens find a non-violent way to do these
            things?
          </p>
          <p>
            Every year, humans kill more than{" "}
            <a href="https://considerveganism.com/counter/" target="blank">
              90 billion land animals globally. When marine life is included,
              that number rises to around 2 trillion
            </a>
            . In roughly six weeks, we kill more animals than there have ever
            been humans in all of history. Isaac Bashevis Singer, Nobel Prize
            winner and survivor of World War II, wrote:
          </p>
          <blockquote className="my-6 border-l-4 border-black bg-white/70 px-6 py-5 text-xl leading-relaxed text-gray-900 shadow-sm">
            <p className="font-serif italic">
              &quot;In relation to animals, all people are Nazis. For the
              animals, it is an eternal Treblinka&quot;
            </p>
            <footer className="pt-3 text-sm font-semibold uppercase tracking-[0.18em] text-gray-600">
              Isaac Bashevis Singer
            </footer>
          </blockquote>
          <div className="py-2 text-3xl">Educate yourself</div>
          <p>
            Animals deserve moral consideration. The very least you can do is
            to educate yourself on what you&apos;re paying for. Watch these
            videos to educate yourself on:
          </p>
        </div>
        <ContentTabs ariaLabel="Featured videos" items={videos} />
        <div className="py-6 text-3xl">Resources to help you get started</div>
        <div className="py-2">
          According to the{" "}
          <a
            href="https://en.wikipedia.org/wiki/Veganism#Positions_of_dietetic_and_government_associations"
            target="blank"
          >
            largest health institutes in the world
          </a>{" "}
          a well planned vegan diet is healthful, nutritionally adequate and
          appropriate for all stages of life, including infancy, old age,
          pregnancy and even for{" "}
          <a href="https://www.greatveganathletes.com/" target="blank">
            athletes
          </a>
          . Besides, in <CurrentYear /> it is easier than ever to go vegan. You
          don&apos;t need to be missing out. What at first looks like giving
          things up is mostly just swapping to better alternatives.
        </div>
        <ContentTabs ariaLabel="Vegan resources" items={resources} />
      </div>
      <footer className="relative left-1/2 mt-auto w-screen -translate-x-1/2 bg-black py-6 text-white">
        <div className="mx-auto flex w-full max-w-[80%] flex-col items-center justify-between gap-2 px-4 text-sm md:flex-row">
          <p>Free to use. No rights reserved. With love from Vegan Future 💚</p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-4">
              <a
                href="https://www.youtube.com/@kindfuturenow"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="text-gray-500 hover:text-red-600 transition"
              >
                <FaYoutube className="h-6 w-6" />
              </a>

              <a
                href="https://www.instagram.com/kindfuturenow"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-gray-500 hover:text-pink-600 transition"
              >
                <FaInstagram className="h-6 w-6" />
              </a>
              <a
                href="https://veganfuture.org/contact"
                className="hover:underline text-white/80 hover:text-white"
                target="blank"
              >
                Contact us
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
