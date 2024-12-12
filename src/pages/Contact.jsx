

function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <section className="p-6 bg-white text-gray-100">
	<div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
		<div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 bg-gray-900">
			<span className="block mb-2 text-violet-400">Mamba design system</span>
			<h1 className="text-5xl font-extrabold text-gray-50">Build it with Mamba</h1>
			<p className="my-8">
				<span className="font-medium text-gray-50">Modular and versatile.</span>Fugit vero facilis dolor sit neque cupiditate minus esse accusamus cumque at.
			</p>
			<form noValidate="" action="" className="self-stretch space-y-3">
				<div>
					<label htmlFor="name" className="text-sm sr-only">Your name</label>
					<input id="name" type="text" placeholder="Your name" className="w-full rounded-md focus:ring focus:ring-violet-400 border-gray-700" />
				</div>
				<div>
					<label htmlFor="lastname" className="text-sm sr-only">Email address</label>
					<input id="lastname" type="text" placeholder="Email address" className="w-full rounded-md focus:ring focus:ring-violet-400 border-gray-700" />
				</div>
				<button type="button" className="w-full py-2 font-semibold rounded bg-violet-400 text-gray-900">Join the waitlist</button>
			</form>
		</div>
		
	</div>
</section>
    </div>
  );
}
export default Contact;