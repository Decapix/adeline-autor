<!-- edit product page -->
<script>
	export let data;

	let book = data.book

</script>




<div class="bg-white rounded-lg shadow-md p-6">
	<div class="text-sm breadcrumbs">
		<ul>
		  <li><a href="/adminn/">Home</a></li> 
		  <li><a href="/adminn/book/">livres</a></li> 
		  <li>{book.title.fr}</li>
		</ul>
	  </div>

		<h2 class="text-xl font-semibold ">modifier le livre</h2>
		<h4 class="text-l font-semibold mb-4 ml-4">{book.title.fr} </h4>
		<form action="?/updateBook" method="POST">
			<div class="bg-white rounded-lg p-6">
                <div class="pl-16">
				<h2 class="text-xl font-semibold mb-4">titre</h2>
				<div class="mb-4">
					<label class="label">
						<span class="label-text">français</span>
					</label>
					<input
						type="text"
						name="frt"
						value="{book.title.fr}"
						class="px-4 py-2 border rounded w-full"
					/>
                    </div>
                    <div class="mb-4">
						<label class="label">
							<span class="label-text">anglais</span>
						</label>
                        <input
                            type="text"
                            name="ent"
                            value="{book.title.en}"
                            class="px-4 py-2 border rounded w-full"
                        />
                    </div>
                    <div class="mb-4">
						<label class="label">
							<span class="label-text">espagnole</span>
						</label>
                        <input
                            type="text"
                            name="est"
                            value="{book.title.es}"
                            class="px-4 py-2 border rounded w-full"
                        />
                    </div>
                    <div class="mb-4">
						<label class="label">
							<span class="label-text">russe</span>
						</label>
                        <input
                            type="text"
                            name="rut"
                            value="{book.title.ru}"
                            class="px-4 py-2 border rounded w-full"
                        />
                    </div>
					
                    <div class="mb-4">
						<label class="label">
							<span class="label-text">japonais</span>
						</label>
                        <input
                            type="text"
                            name="jat"
                            value="{book.title.ja}"
                            class="px-4 py-2 border rounded w-full"
                        />
                    </div>
					<h2 class="text-xl font-semibold mb-4">description</h2>
					<div class="mb-4">
						<label class="label">
							<span class="label-text">français</span>
						</label>
						<input
							type="text"
							name="frd"
							value="{book.description.fr}"
							class="px-4 py-2 border rounded w-full"
						/>
					</div>
					<div class="mb-4">
						<label class="label">
							<span class="label-text">Anglais</span>
						</label>
						<input
							type="text"
							name="end"
							value="{book.description.en}"
							class="px-4 py-2 border rounded w-full"
						/>
					</div>
					<div class="mb-4">
						<label class="label">
							<span class="label-text">Espagnol</span>
						</label>
						<input
							type="text"
							name="esd"
							value="{book.description.es}"
							class="px-4 py-2 border rounded w-full"
						/>
					</div>
					<div class="mb-4">
						<label class="label">
							<span class="label-text">Russe</span>
						</label>
						<input
							type="text"
							name="rud"
							value="{book.description.ru}"
							class="px-4 py-2 border rounded w-full"
						/>
					</div>
					<div class="mb-4">
						<label class="label">
							<span class="label-text">Japonais</span>
						</label>
						<input
							type="text"
							name="jad"
							value="{book.description.ja}"
							class="px-4 py-2 border rounded w-full"
						/>
					</div>
				</div>
				<div class="mb-4">
					<input
						type="text"
						name="mainImage"
						value="{book.mainImage}"
						class="px-4 py-2 border rounded w-full"
					/>
				</div>
				<div class="mb-4">
					<input
						type="text"
						name="image1"
						value="{book.image1}"
						class="px-4 py-2 border rounded w-full"
					/>
				</div>
  
				<div class="mb-4">
					<input
						type="text"
						name="image2"
						value="{book.image2}"
						class="px-4 py-2 border rounded w-full"
					/>
				</div>
				<div class="mb-4">
					<input
						type="text"
						name="image3"
						value="{book.image3}"
						class="px-4 py-2 border rounded w-full"
					/>
				</div>
				<div class="mb-4">
					<input
						type="text"
						name="image4"
						value="{book.image4}"
						class="px-4 py-2 border rounded w-full"
					/>
				</div>
				<div class="mb-4">
					<label class="label">
						<span class="label-text">type</span>
					</label>
					<input
						type="text"
						name="type"
						value="{book.type}"
						class="px-4 py-2 border rounded w-full"
					/>
				</div>
        				<button type="submit" class="btn"> modifier </button>
			</div>
		</form>
	</div>