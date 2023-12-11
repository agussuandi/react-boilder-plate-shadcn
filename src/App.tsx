import { playlists } from "@/data/playlist"
import { Navbar } from "@/components/layout/navbar"
import { Sidebar } from "@/components/layout/sidebar"

export default function App() {
	return (
		<>
			<div>
				<Navbar />
				<div className="border-t">
					<div className="bg-background">
						<div className="grid lg:grid-cols-5">
							<Sidebar playlists={playlists} className="hidden lg:block" />
							<div className="col-span-3 lg:col-span-4 lg:border-l">
								<div className="h-full px-4 py-6 lg:px-8">
									Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, eligendi eveniet. Suscipit qui voluptatem illum consectetur laboriosam eos eius, ipsum impedit? Modi aspernatur officiis laboriosam maxime harum voluptatum impedit optio.
									Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam iusto a quo. Alias numquam ratione consectetur accusamus esse. Aliquam ab autem amet nisi voluptatum perspiciatis iste cumque corporis eum deserunt.
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
