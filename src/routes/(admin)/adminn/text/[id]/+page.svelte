<script>
	export let data;
  
	let text = data.text;
  </script>
  
  <div class="bg-white rounded-lg shadow-md p-6">
	<div class="text-sm breadcrumbs">
	  <ul>
		<li><a href="/adminn/">Home</a></li> 
		<li><a href="/adminn/text/">Textes</a></li> 
		<li>{text.title.fr}</li>
	  </ul>
	</div>
  
	<h2 class="text-xl font-semibold ">Modifier le texte</h2>
	<h4 class="text-l font-semibold mb-4 ml-4">{text.title.fr}</h4>
	<form action="?/updateText" method="POST">
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
							value="{text.title.fr}"
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
								value="{text.title.en}"
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
								value="{text.title.es}"
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
								value="{text.title.ru}"
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
								value="{text.title.ja}"
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
								value="{text.description.fr}"
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
								value="{text.description.en}"
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
								value="{text.description.es}"
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
								value="{text.description.ru}"
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
								value="{text.description.ja}"
								class="px-4 py-2 border rounded w-full"
							/>
						</div>
		  <!-- Champs pour les images -->
		  {#each Array(8) as _, i}
			<div class="mb-4">
			  <input
				type="text"
				name={`image${i + 1}`}
				value={text[`image${i + 1}`] || ''}
				class="px-4 py-2 border rounded w-full"
			  />
			</div>
		  {/each}
		</div>
		<button type="submit" class="btn">Modifier</button>
	  </div>
	</form>
  </div>
  