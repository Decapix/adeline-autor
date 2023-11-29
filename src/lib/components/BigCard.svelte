<script>
    export let item;
    export let index;
    export let hrefBase;
    export let color = ["danger", "warning", "info", "success"];
    
  function truncateDescription(description) {
	  if (description.length > 200) {
		return description.substring(0, 200) + '...';
	  }
	  return description;
	}  
  </script>
    

  <div class="container pb-4">
    <a href={`${hrefBase}/${item.id}`} class="card-link">
      <div class="row">
        <div class="col-12">
          <div class={`card  bg-soft-${color[index % color.length]} rounded-3`}>
            <div class="row g-0 align-items-center">
              {#if item.image1}
              <div class="col-sm-12 col-md-6 col-lg-4 custom-img-container">
                <img class="custom-img" src={`${item.image1}`} alt="" />
              </div>
              {/if}
              <div class="px-md-2 px-xl-6 text-center text-md-start {item.image1 ? 'col-md-7 col-lg-6' : 'col-12'}">
                <div class="card-body px-4 py-5 p-lg-3 p-md-4">
                  <h1 class="mb-4 fw-bold">{item.title.fr}</h1>
                  <p class="card-text">{truncateDescription(item.description.fr)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  </div>
  