import Heading from "@/components/Heading";
import { Button } from "@/components/Button";

import { ButtonProps } from "@/components/Button";

const buttonOptions: ButtonProps["intent"][] = ["primary", "outline", "ghost"];
const buttonSizes: ButtonProps["size"][] = ["small", "medium", "large"];

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col 
    items-center gap-3 p-14"
    >
      <Heading className="text-primary">WishSomeone</Heading>
      <div className="flex flex-col gap-3">
        {buttonOptions.map((option) => {
          return (
            <>
              <div key={option} className="flex row gap-2">
                {buttonSizes.map((size) => {
                  return (
                    <Button
                      key={option}
                      intent={option}
                      size={size}
                      className="shadow-btn-primary"
                    >
                      <span>Learn More</span>
                      <span>&rarr;</span>
                    </Button>
                  );
                })}
              </div>
            </>
          );
        })}
        <Heading>Icons</Heading>
        {buttonOptions.map((option) => {
          return (
            <>
              <div key={option} className="flex row gap-2">
                {buttonSizes.map((size) => {
                  return (
                    <Button
                      key={option}
                      btnType={"icon"}
                      intent={option}
                      size={size}
                    >
                      <span>&rarr;</span>
                    </Button>
                  );
                })}
              </div>
            </>
          );
        })}
      </div>
    </main>
  );
}
