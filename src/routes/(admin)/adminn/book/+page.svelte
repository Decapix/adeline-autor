<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<main class="px-10 py-8">


	<div class="text-sm breadcrumbs">
		<ul>
		  <li><a href="/adminn/">Home</a></li> 
		  <li>Livre</li> 
		</ul>
	  </div>


	<!-- Titre de la section -->
	<h1 class="text-2xl font-semibold mb-4">Gestion des Livres</h1>

	<!-- Afficher les produits -->

	<div class="bg-white rounded-lg shadow-md p-6 mb-8">
		<h2 class="text-xl font-semibold mb-4">Liste des livres</h2>
		{#each data.books as book}
			<div class="flex justify-between items-center border-b border-gray-200 py-2">
				<span class="text-gray-700">{book.title.fr}</span>

                <a class="btn btn-info" href="/adminn/book/{book.id}">
                    modifier
                </a>
				<form action="?/deleteBook&id={book.id}" method="POST">
					<button class="btn btn-error">
						Supprimer
					</button>
				</form>
			</div>
		{/each}
	</div>


	<!-- Créer un nouveau produit -->
	<div class="bg-white rounded-lg shadow-md p-6">
		<h2 class="text-xl font-semibold mb-4">Ajouter un nouveau livre</h2>
		<form action="?/createBook" method="POST">
			<div class="bg-white rounded-lg p-6">
                <div class="pl-16">
				<h2 class="text-xl font-semibold mb-4">titre - optionnel</h2>
				<div class="mb-4">
					<input
						type="text"
						name="frt"
						placeholder="Français"
						class="px-4 py-2 border rounded w-full"
						
					/>
                    </div>
                    <div class="mb-4">
                        <input
                            type="text"
                            name="ent"
                            placeholder="Anglais"
                            class="px-4 py-2 border rounded w-full"
							
                        />
                    </div>
                    <div class="mb-4">
                        <input
                            type="text"
                            name="est"
                            placeholder="Espagnol"
                            class="px-4 py-2 border rounded w-full"
							
                        />
                    </div>
                    <div class="mb-4">
                        <input
                            type="text"
                            name="rut"
                            placeholder="Russe"
                            class="px-4 py-2 border rounded w-full"
							
                        />
                    </div>
                    <div class="mb-4">
                        <input
                            type="text"
                            name="jat"
                            placeholder="Japonais"
                            class="px-4 py-2 border rounded w-full"
							
                        />
                    </div>
					<h2 class="text-xl font-semibold mb-4">description - optionnel</h2>
					<div class="mb-4">
						<input
							type="text"
							name="frd"
							placeholder="Français"
							class="px-4 py-2 border rounded w-full"
							
						/>
					</div>
					<div class="mb-4">
						<input
							type="text"
							name="end"
							placeholder="Anglais"
							class="px-4 py-2 border rounded w-full"
							
						/>
					</div>
					<div class="mb-4">
						<input
							type="text"
							name="esd"
							placeholder="Espagnol"
							class="px-4 py-2 border rounded w-full"
							
						/>
					</div>
					<div class="mb-4">
						<input
							type="text"
							name="rud"
							placeholder="Russe"
							class="px-4 py-2 border rounded w-full"
							
						/>
					</div>
					<div class="mb-4">
						<input
							type="text"
							name="jad"
							placeholder="Japonais"
							class="px-4 py-2 border rounded w-full"
							
						/>
					</div>
				</div>
				<div class="mb-4">
					<input
						type="text"
						name="mainImage"
						placeholder="Image principale"
						class="px-4 py-2 border rounded w-full"
						required
					/>
				</div>
				<div class="mb-4">
					<input
						type="text"
						name="image1"
						placeholder="Image 1"
						class="px-4 py-2 border rounded w-full"
					/>
				</div>
  
				<div class="mb-4">
					<input
						type="text"
						name="image2"
						placeholder="Image 2"
						class="px-4 py-2 border rounded w-full"
					/>
				</div>
				<div class="mb-4">
					<input
						type="text"
						name="image3"
						placeholder="Image 3"
						class="px-4 py-2 border rounded w-full"
					/>
				</div>
				<div class="mb-4">
					<input
						type="text"
						name="image4"
						placeholder="Image 4"
						class="px-4 py-2 border rounded w-full"
					/>
				</div>
				<div class="mb-4">
					<input
						type="text"
						name="image5"
						placeholder="Image 5"
						class="px-4 py-2 border rounded w-full"
					/>
				</div>
				<div class="mb-4">
					<input
						type="text"
						name="type"
						placeholder="Type"
						class="px-4 py-2 border rounded w-full"
					/>
				</div>

				<button type="submit" class="btn"> Ajouter </button>
			</div>
		</form>
	</div>
</main>
