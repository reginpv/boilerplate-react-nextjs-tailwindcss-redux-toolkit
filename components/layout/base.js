export default function Base( { className, children }) {
  
  return(
    <>
			<section className={className}>
				{children}
			</section>
		</>
  )

}