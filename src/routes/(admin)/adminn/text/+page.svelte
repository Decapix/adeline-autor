<script>
	/** @type {import('./$types').PageData} */
	export let data;
  </script>
  
  <main class="px-10 py-8">
  
	<div class="text-sm breadcrumbs">
	  <ul>
		<li><a href="/adminn/">Home</a></li> 
		<li>Texte</li> 
	  </ul>
	</div>
  
	<!-- Titre de la section -->
	<h1 class="text-2xl font-semibold mb-4">Gestion des Textes</h1>
  
	<!-- Afficher les textes -->
	<div class="bg-white rounded-lg shadow-md p-6 mb-8">
	  <h2 class="text-xl font-semibold mb-4">Liste des textes</h2>
	  {#each data.texts as text}
		<div class="flex justify-between items-center border-b border-gray-200 py-2">
		  <span class="text-gray-700">{text.title.fr}</span>
  
		  <a class="btn btn-info" href="/adminn/text/{text.id}">
			  modifier
		  </a>
		  <form action="?/deleteText&id={text.id}" method="POST">
			<button class="btn btn-error">
			  Supprimer
			</button>
		  </form>
		</div>
	  {/each}
	</div>
  
	<!-- Créer un nouveau texte -->
	<div class="bg-white rounded-lg shadow-md p-6">
	  <h2 class="text-xl font-semibold mb-4">Ajouter un nouveau texte</h2>
	  <form action="?/createText" method="POST">
		<div class="bg-white rounded-lg p-6">
		  <!-- Similar input fields for title and description in different languages -->
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
		  <!-- Input fields for images -->
		  {#each Array(8) as _, i}
			<div class="mb-4">
			  <input
				type="text"
				name={`image${i + 1}`}
				placeholder={`Image ${i + 1}`}
				class="px-4 py-2 border rounded w-full"
			  />
			</div>
		  {/each}
  
		  <!-- Input field for bookId -->
		  <div class="mb-4">
			<input
			  type="text"
			  name="bookId"
			  placeholder="ID du livre associé"
			  class="px-4 py-2 border rounded w-full"
			/>
		  </div>
  
		  <button type="submit" class="btn"> Ajouter </button>
		</div>
	  </form>
	</div>
  
  </main>