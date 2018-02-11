import { trigger, state, style, animate, transition } from "@angular/animations";

export function flyInOut() {
	return trigger("flyInOut", [
		state("*", style({
			opacity: 1,
			transform: "translateY(0)"
		})),
		transition(":enter", [
			style({
				transform: "translateY(-100%)",
				opacity: 1
			}), animate("300ms ease-in")
		]),
		transition(":leave", [
			style ({
				opacity: 0
			})
		])
	])
}