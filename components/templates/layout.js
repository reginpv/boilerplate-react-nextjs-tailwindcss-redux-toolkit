import Meta from "./meta";

export default function Layout({ className, meta, children }){
	return (
		<>
			<Meta {...meta} />
			<section className={className}>
				{children}
			</section>
		</>
	)
}