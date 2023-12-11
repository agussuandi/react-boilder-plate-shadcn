import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
// import { HamburgerMenuIcon } from "@radix-ui/react-icons"
import {
	Sheet,
	SheetContent,
	SheetTrigger
} from "@/components/ui/sheet"

interface MobilebarProps extends React.HTMLAttributes<HTMLDivElement> { }

export function Mobilebar({ className }: MobilebarProps) {
	return (
		<div className={cn("mr-2", className)}>
			<div className="space-y-4 py-1">
				<Sheet>
					<SheetTrigger asChild>
						{/* <Button variant="outline" size="icon">
							<HamburgerMenuIcon />
						</Button> */}
						<button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 py-2 mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:R15hja:" data-state="closed">
							<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
								<path d="M8 2H13.5C13.7761 2 14 2.22386 14 2.5V12.5C14 12.7761 13.7761 13 13.5 13H8V2ZM7 2H1.5C1.22386 2 1 2.22386 1 2.5V12.5C1 12.7761 1.22386 13 1.5 13H7V2ZM0 2.5C0 1.67157 0.671573 1 1.5 1H13.5C14.3284 1 15 1.67157 15 2.5V12.5C15 13.3284 14.3284 14 13.5 14H1.5C0.671573 14 0 13.3284 0 12.5V2.5Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
							</svg>
							<span className="sr-only">Toggle Menu</span>
						</button>
					</SheetTrigger>
					<SheetContent side="left">
						<div className="py-3">
							<h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">
								Discover
							</h2>
							<div className="space-y-1">
								<Button variant="secondary" className="w-full justify-start">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
										className="mr-2 h-4 w-4"
									>
										<circle cx="12" cy="12" r="10" />
										<polygon points="10 8 16 12 10 16 10 8" />
									</svg>
									Listen Now
								</Button>
								<Button variant="ghost" className="w-full justify-start">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
										className="mr-2 h-4 w-4"
									>
										<rect width="7" height="7" x="3" y="3" rx="1" />
										<rect width="7" height="7" x="14" y="3" rx="1" />
										<rect width="7" height="7" x="14" y="14" rx="1" />
										<rect width="7" height="7" x="3" y="14" rx="1" />
									</svg>
									Browse
								</Button>
								<Button variant="ghost" className="w-full justify-start">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
										className="mr-2 h-4 w-4"
									>
										<path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9" />
										<path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5" />
										<circle cx="12" cy="12" r="2" />
										<path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5" />
										<path d="M19.1 4.9C23 8.8 23 15.1 19.1 19" />
									</svg>
									Radio
								</Button>
							</div>
						</div>
					</SheetContent>
				</Sheet>
			</div>
		</div>
	)
}
