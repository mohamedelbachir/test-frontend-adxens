import { Setting2 } from "iconsax-reactjs";
import { Button } from "./ui/button";
import { Card, CardDescription, CardFooter, CardHeader } from "./ui/card";
import { useSidebar } from "./ui/sidebar";
import clsx from "clsx";

export default function Footer() {
  const { state } = useSidebar();

  return (
    <>
      <Card
        className={clsx("!p-3", {
          hidden: state === "collapsed",
        })}
      >
        <CardHeader className="!p-0">
          <CardDescription className="!p-0">
            You are currently on <b>Starter plan</b>. Upgrade to access lower
            fees,advance fee.
          </CardDescription>
        </CardHeader>
        <CardFooter className="!p-0">
          <Button variant={"outline"} className={"w-full rounded-md"}>
            Upgrade
          </Button>
        </CardFooter>
      </Card>
      <Button
        variant="outline"
        size={state === "collapsed" ? "icon" : "sm"}
        className={clsx("w-full left justify-between items-center")}
      >
        <div
          className={clsx("flex gap-2 items-center w-fit justify-center", {
            "w-full": state === "collapsed",
          })}
        >
          <Setting2 />
          <span
            className={clsx({
              hidden: state === "collapsed",
            })}
          >
            Settings
          </span>
        </div>
        <span
          className={clsx(
            "bg-secondary text-white size-5 flex items-center justify-center rounded-full",
            {
              hidden: state === "collapsed",
            },
          )}
        >
          1
        </span>
      </Button>
    </>
  );
}
