<template>
  <!-- eslint-disable -->
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
	    <div class="container">
	      <a class="navbar-brand" href="index.html">Eleva<span>puertas</span></a>
	      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
	        <span class="oi oi-menu"></span> Menu
	      </button>

	      <div class="collapse navbar-collapse" id="ftco-nav">
	        <ul class="navbar-nav ml-auto">
	          <li class="nav-item active"><a href="index.html" class="nav-link">Inicio</a></li>
	          <li class="nav-item"><a href="about.html" class="nav-link">Sobre nosotros</a></li>
	          <li class="nav-item"><a href="pricing.html" class="nav-link">Experiencias</a></li>
	          <li class="nav-item"><a href="car.html" class="nav-link">Contacto</a></li>
	        </ul>
	      </div>
	    </div>
	  </nav>
    <!-- END nav -->
    
    <div class="hero-wrap" style="background-image: url('/images/bg_1.jpg');" data-stellar-background-ratio="0.2">
      <div class="overlay"></div>
      <div class="container">
        <div class="row no-gutters slider-text justify-content-start align-items-center">
          <div class="col-lg-6 col-md-6 ftco-animate d-flex align-items-end">
          	<div class="text">
	            <h1 class="mb-4">
					TUFF SUPPORT 
					<span style="font-size: 35px; margin: -25px; -webkit-text-stroke: 0.8px; -webkit-text-stroke-color: white; color: #f7b71d; font-weight: 500;">
						+
					</span>ELEVAPUERTAS</h1>
	            <p style="font-size: 18px;">Somos una empresa dedicada a proporcionar elevadores de neumáticos para todo tipo de vehículos, desde autos hasta camiones pesados. Nuestra gama de productos es suministrada por nuestro aliado y proveedor, Tuff Support, quien nos garantiza una calidad excepcional.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section class="ftco-section ftco-no-pb mt-2 pt-2">
    	<div class="container"><div class="row justify-content-center">
			<div class="col-md-12 heading-section text-center ftco-animate mb-0">
				<span class="subheading">Encuentra elevadores para tu vehiculo</span>
			  <h2 class="mb-2">Buscador</h2>
			</div>
		  </div>
	    	<div class="row">
					<div class="col-md-12">
						<div class="search-wrap-1 ftco-animate mb-5">
							<form action="#" class="search-property-1">
		        		<div class="row">
		        			<div class="col-lg align-items-end">
		        				<SelectForm id="form-model" :opciones="['alo','23']"></SelectForm>
		        			</div>
		        			<div class="col-lg align-items-end">
		        				<div class="form-group">
		        					<label for="#">Modelo</label>
		        					<div class="form-field">
		          					<div class="select-wrap">
		             		      <div class="icon"><span class="ion-ios-arrow-down"></span></div>
		             		      <select name="" id="" class="form-control">
		             		      	<option value="">Seleccione el modelo</option>
		             		        <option value="">Brand 1</option>
		             		        <option value="">Brand 2</option>
		             		        <option value="">Brand 3</option>
		             		        <option value="">Brand 4</option>
		             		        <option value="">Brand 5</option>
		             		        <option value="">Brand 6</option>
		             		        <option value="">Brand 7</option>
		             		        <option value="">Brand 8</option>
		             		        <option value="">Brand 9</option>
		             		        <option value="">Brand 10</option>
		             		      </select>
		             		    </div>
				              </div>
			          	  </div>
		        			</div>
		        			<div class="col-lg align-items-end">
		        				<div class="form-group">
		        					<label for="#">Año</label>
		        					<div class="form-field">
		          					<div class="select-wrap">
		             		      <div class="icon"><span class="ion-ios-arrow-down"></span></div>
		             		      <select name="" id="" class="form-control">
		             		      	<option value="">Seleccione el año</option>
		             		        <option value="">2019</option>
		             		        <option value="">2018</option>
		             		        <option value="">2017</option>
		             		        <option value="">2016</option>
		             		        <option value="">2015</option>
		             		        <option value="">2014</option>
		             		      </select>
		             		    </div>
				              </div>
			          	  </div>
		        			</div>
									<div class="col-lg align-self-end">
		        				<div class="form-group">
		        					<div class="form-field">
				                <input type="submit" value="Buscar" class="form-control btn btn-primary">
				              </div>
			          	  </div>
		        			</div>
		        		</div>
		        	</form>
		        </div>
					</div>
	    	</div>
	    </div>
    </section>

    <section class="ftco-section services-section ftco-no-pt ftco-no-pb">
      <div class="container">
      	<div class="row justify-content-center">
          <div class="col-md-12 heading-section text-center ftco-animate mb-5">
          	<span class="subheading">Te ofrecemos</span>
            <h2 class="mb-2">Nuestros Servicios</h2>
          </div>
        </div>
        <div class="row d-flex">
          <div class="col-md-3 d-flex align-self-stretch ftco-animate">
            <div class="media block-6 services">
              <div class="media-body py-md-4">
              	<div class="d-flex mb-3 align-items-center">
	              	<div class="icon"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="48" height="48" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path d="M491.729 112.971 259.261.745a7.503 7.503 0 0 0-6.521 0L20.271 112.971a7.5 7.5 0 0 0-4.239 6.754v272.549a7.5 7.5 0 0 0 4.239 6.754l232.468 112.226a7.504 7.504 0 0 0 6.522 0l232.468-112.226a7.5 7.5 0 0 0 4.239-6.754V119.726a7.502 7.502 0 0 0-4.239-6.755zM256 15.828l215.217 103.897-62.387 30.118a7.434 7.434 0 0 0-1.27-.8L193.805 45.853 256 15.828zm-79.133 38.505 214.904 103.746-44.015 21.249L132.941 75.624l43.926-21.291zm219.932 117.974v78.546l-41.113 19.848v-78.546l41.113-19.848zm84.169 215.261L263.5 492.55V236.658l51.873-25.042a7.5 7.5 0 1 0-6.522-13.508L256 223.623l-20.796-10.04a7.498 7.498 0 0 0-10.015 3.493 7.5 7.5 0 0 0 3.493 10.015l19.818 9.567V492.55L31.032 387.566V131.674l165.6 79.945a7.463 7.463 0 0 0 3.255.748 7.5 7.5 0 0 0 3.266-14.256l-162.37-78.386 74.505-35.968L340.582 192.52c.033.046.07.087.104.132v89.999a7.502 7.502 0 0 0 10.761 6.754l56.113-27.089a7.499 7.499 0 0 0 4.239-6.754v-90.495l69.169-33.392v255.893z" fill="#000000" data-original="#000000" class=""></path><path d="M92.926 358.479 58.811 342.01a7.5 7.5 0 0 0-6.522 13.508l34.115 16.469a7.463 7.463 0 0 0 3.255.748 7.5 7.5 0 0 0 6.759-4.241 7.499 7.499 0 0 0-3.492-10.015zM124.323 338.042l-65.465-31.604a7.501 7.501 0 0 0-6.521 13.509l65.465 31.604a7.477 7.477 0 0 0 3.255.748 7.5 7.5 0 0 0 3.266-14.257z" fill="#000000" data-original="#000000" class=""></path></g></svg></div>
	                <h3 class="heading mb-0 pl-3">Envios a nivel nacional</h3>
                </div>
                <p>Nos aseguramos de que nuestros elevadores de neumáticos lleguen a donde nuestros clientes lo necesiten.</p>
              </div>
            </div>      
          </div>
          <div class="col-md-3 d-flex align-self-stretch ftco-animate">
            <div class="media block-6 services">
              <div class="media-body py-md-4">
              	<div class="d-flex mb-3 align-items-center">
	              	<div class="icon"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="48" height="48" x="0" y="0" viewBox="0 0 64 64" style="enable-background:new 0 0 512 512" xml:space="preserve"><g><path d="M33 63h30V39H33zm12-22h6v2h-6zm-10 0h8v4h10v-4h8v20H35z" fill="#000000" data-original="#000000"></path><path d="M57 57h2v2h-2zM53 57h2v2h-2zM49 57h2v2h-2zM61 21h-2V1H33v20h-2V1H5v20H3c-1.103 0-2 .897-2 2v2c0 1.103.897 2 2 2h5.263A7.953 7.953 0 0 0 8 29a7.996 7.996 0 0 0 3.585 6.665C5.462 37.555 1 43.265 1 50a5.003 5.003 0 0 0 3 4.576V63h27V50c0-6.735-4.462-12.445-10.585-14.335A7.996 7.996 0 0 0 24 29c0-.692-.097-1.359-.263-2H61c1.103 0 2-.897 2-2v-2c0-1.103-.897-2-2-2zM43 3h6v2h-6zm-8 0h6v4h10V3h6v18h-6v-4H41v4h-6zm14 18h-6v-2h6zM15 3h6v2h-6zM7 3h6v4h10V3h6v18h-6v-4H13v4H7zm8 18v-2h6v2zM3 25v-2h7.726a8.069 8.069 0 0 0-1.644 2zm3 30h4v6H6zm9.5-7H12v-5h7v5h5v13H12v-6h3.5c1.93 0 3.5-1.57 3.5-3.5S17.43 48 15.5 48zm5.5-3.586L22.586 46H21zM29 50v11h-3V46.586L20.414 41H10v7H7v2h8.5c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5H6c-1.654 0-3-1.346-3-3 0-7.168 5.832-13 13-13s13 5.832 13 13zM16 35c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6zm45-10H22.918a8.047 8.047 0 0 0-1.644-2H61zM49 53h10v2H49z" fill="#000000" data-original="#000000"></path></g></svg></div>
	                <h3 class="heading mb-0 pl-3">Amplio stock</h3>
                </div>
                <p>Contamos con un amplio inventario de elevadores de neumáticos, lo que nos permite brindar una respuesta rápida y oportuna a las necesidades de nuestros clientes.</p>
              </div>
            </div>      
          </div>
          <div class="col-md-3 d-flex align-self-stretch ftco-animate">
            <div class="media block-6 services">
              <div class="media-body py-md-4">
              	<div class="d-flex mb-3 align-items-center">
	              	<div class="icon"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="48" height="48" x="0" y="0" viewBox="0 0 682.667 682.667" style="enable-background:new 0 0 512 512" xml:space="preserve"><g><defs><clipPath id="a" clipPathUnits="userSpaceOnUse"><path d="M0 512h512V0H0Z" fill="#000000" data-original="#000000"></path></clipPath></defs><g clip-path="url(#a)" transform="matrix(1.33333 0 0 -1.33333 0 682.667)"><path d="M0 0c78.12-8.798 138.835-75.087 138.835-155.558 0-86.46-70.089-156.549-156.549-156.549-86.46 0-156.55 70.089-156.55 156.549 0 80.401 60.611 146.646 138.633 155.535" style="stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; stroke-dasharray: none; stroke-opacity: 1;" transform="translate(273.714 411.558)" fill="none" stroke="#000000" stroke-width="15px" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="none" stroke-opacity="" data-original="#000000"></path><path d="M0 0v0a39.052 39.052 0 0 1 40.397-10.824c21.801 6.822 44.777-6.444 49.77-28.735a39.049 39.049 0 0 1 29.572-29.572c22.291-4.993 35.557-27.969 28.735-49.77a39.05 39.05 0 0 1 10.824-40.397c16.808-15.469 16.808-41.999 0-57.469a39.05 39.05 0 0 1-10.824-40.397c6.822-21.801-6.444-44.777-28.735-49.769a39.051 39.051 0 0 1-29.572-29.573c-4.993-22.291-27.969-35.556-49.77-28.734A39.052 39.052 0 0 1 0-376.064c-15.469-16.809-42-16.809-57.469 0a39.052 39.052 0 0 1-40.397 10.824c-21.801-6.822-44.777 6.443-49.769 28.734a39.054 39.054 0 0 1-29.573 29.573c-22.291 4.992-35.557 27.968-28.734 49.769a39.052 39.052 0 0 1-10.825 40.397c-16.808 15.47-16.808 42 0 57.469a39.052 39.052 0 0 1 10.825 40.397c-6.823 21.801 6.443 44.777 28.734 49.77a39.051 39.051 0 0 1 29.573 29.572c4.992 22.291 27.968 35.557 49.769 28.735A39.052 39.052 0 0 1-57.469 0C-42 16.809-15.469 16.809 0 0Z" style="stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; stroke-dasharray: none; stroke-opacity: 1;" transform="translate(284.734 444.032)" fill="none" stroke="#000000" stroke-width="15px" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="none" stroke-opacity="" data-original="#000000"></path><path d="m0 0-62.732-62.732" style="stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; stroke-dasharray: none; stroke-opacity: 1;" transform="translate(502.416 504.5)" fill="none" stroke="#000000" stroke-width="15px" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="none" stroke-opacity="" data-original="#000000"></path><path d="m0 0 31.366 8.557" style="stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; stroke-dasharray: none; stroke-opacity: 1;" transform="translate(471.05 396.467)" fill="none" stroke="#000000" stroke-width="15px" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="none" stroke-opacity="" data-original="#000000"></path><path d="m0 0 8.557 31.366" style="stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; stroke-dasharray: none; stroke-opacity: 1;" transform="translate(393.714 473.134)" fill="none" stroke="#000000" stroke-width="15px" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="none" stroke-opacity="" data-original="#000000"></path><path d="m0 0 62.732-62.732" style="stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; stroke-dasharray: none; stroke-opacity: 1;" transform="translate(9.584 504.5)" fill="none" stroke="#000000" stroke-width="15px" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="none" stroke-opacity="" data-original="#000000"></path><path d="m0 0-31.366 8.557" style="stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; stroke-dasharray: none; stroke-opacity: 1;" transform="translate(40.95 396.467)" fill="none" stroke="#000000" stroke-width="15px" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="none" stroke-opacity="" data-original="#000000"></path><path d="m0 0-8.557 31.366" style="stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; stroke-dasharray: none; stroke-opacity: 1;" transform="translate(118.286 473.134)" fill="none" stroke="#000000" stroke-width="15px" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="none" stroke-opacity="" data-original="#000000"></path><path d="m0 0-62.732 62.732" style="stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; stroke-dasharray: none; stroke-opacity: 1;" transform="translate(502.416 7.5)" fill="none" stroke="#000000" stroke-width="15px" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="none" stroke-opacity="" data-original="#000000"></path><path d="m0 0 31.366-8.557" style="stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; stroke-dasharray: none; stroke-opacity: 1;" transform="translate(471.05 115.533)" fill="none" stroke="#000000" stroke-width="15px" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="none" stroke-opacity="" data-original="#000000"></path><path d="m0 0 8.557-31.366" style="stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; stroke-dasharray: none; stroke-opacity: 1;" transform="translate(393.714 38.866)" fill="none" stroke="#000000" stroke-width="15px" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="none" stroke-opacity="" data-original="#000000"></path><path d="m0 0 62.732 62.732" style="stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; stroke-dasharray: none; stroke-opacity: 1;" transform="translate(9.584 7.5)" fill="none" stroke="#000000" stroke-width="15px" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="none" stroke-opacity="" data-original="#000000"></path><path d="m0 0-31.366-8.557" style="stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; stroke-dasharray: none; stroke-opacity: 1;" transform="translate(40.95 115.533)" fill="none" stroke="#000000" stroke-width="15px" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="none" stroke-opacity="" data-original="#000000"></path><path d="m0 0-8.557-31.366" style="stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; stroke-dasharray: none; stroke-opacity: 1;" transform="translate(118.286 38.866)" fill="none" stroke="#000000" stroke-width="15px" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="none" stroke-opacity="" data-original="#000000"></path><path d="m0 0 61.541 61.541c6.145 6.145 6.145 16.107 0 22.252L42.2 103.134c-6.145 6.145-16.108 6.145-22.253 0L-61.61 21.577l-31.982 31.982c-6.145 6.145-16.108 6.145-22.253 0l-20.881-20.882c-6.145-6.145-6.145-16.108 0-22.252l53.499-53.5c11.088-11.087 29.064-11.087 40.152 0l18.443 18.443" style="stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; stroke-dasharray: none; stroke-opacity: 1;" transform="translate(293.593 226.427)" fill="none" stroke="#000000" stroke-width="15px" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="none" stroke-opacity="" data-original="#000000"></path></g></g></svg></div>
	                <h3 class="heading mb-0 pl-3">Calidad inigualable</h3>
                </div>
                <p> En Elevapuertas nos esforzamos por ofrecer un producto de calidad excepcional que brinde la misma experiencia que si fuera del fabricante original.</p>
              </div>
            </div>      
          </div>
          <div class="col-md-3 d-flex align-self-stretch ftco-animate">
            <div class="media block-6 services">
              <div class="media-body py-md-4">
              	<div class="d-flex mb-3 align-items-center">
	              	<div class="icon"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="48" height="48" x="0" y="0" viewBox="0 0 682.667 682.667" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><defs><clipPath id="a" clipPathUnits="userSpaceOnUse"><path d="M0 512h512V0H0Z" fill="#000000" data-original="#000000" class=""></path></clipPath></defs><g clip-path="url(#a)" transform="matrix(1.33333 0 0 -1.33333 0 682.667)"><path d="M0 0h-3.088c-7.689-13.15-21.931-22-38.264-22h-67.873v-45.019c0-32.808 25.707-62.773 64.592-62.773 34.613 0 62.774 28.16 62.774 62.773v45.517C8.081-19.367.412-10.575 0 0Z" style="stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; stroke-dasharray: none; stroke-opacity: 1;" transform="translate(286.57 414.83)" fill="none" stroke="#000000" stroke-width="15px" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="none" stroke-opacity="" data-original="#000000"></path><path d="M0 0a11.89 11.89 0 0 0-5.657-1.429c-1.621 0-3.202.173-4.731.497v-45.516c0-.508-.026-1.009-.038-1.514 16.564-2.508 29.537 9.46 29.537 24.158C19.111-12.351 11.258-2.605 0 0Z" style="stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; stroke-dasharray: none; stroke-opacity: 1;" transform="translate(315.1 394.258)" fill="none" stroke="#000000" stroke-width="15px" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="none" stroke-opacity="" data-original="#000000"></path><path d="M0 0h-7.845c-1.444 0-2.843.18-4.192.49-9.706-3.37-17.462-12.105-17.462-22.865 0-14.679 12.944-26.668 29.536-24.158C.025-46.028 0-45.525 0-45.019Z" style="stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; stroke-dasharray: none; stroke-opacity: 1;" transform="translate(177.347 392.83)" fill="none" stroke="#000000" stroke-width="15px" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="none" stroke-opacity="" data-original="#000000"></path><path d="M0 0c-29.676.699-53.869 24.919-54.537 54.597-.453 20.174 9.784 37.986 25.439 48.173 2.616 1.702 6.078-.234 6.078-3.354V51.189c0-1.262.674-2.429 1.768-3.061L-.418 36.099a3.537 3.537 0 0 1 3.535 0l20.834 12.029a3.534 3.534 0 0 1 1.768 3.061v48.224c0 3.17 3.518 5.03 6.173 3.295C47.16 92.729 57.25 75.487 57.25 55.885 57.25 24.563 31.49-.742 0 0Z" style="stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; stroke-dasharray: none; stroke-opacity: 1;" transform="translate(377.957 105.1)" fill="none" stroke="#000000" stroke-width="15px" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="none" stroke-opacity="" data-original="#000000"></path><path d="M0 0c-16.214 9.535-27.29 26.997-27.738 46.935-.453 20.173 9.784 37.986 25.439 48.173 2.615 1.702 6.078-.234 6.078-3.354V43.527c0-1.262.674-2.429 1.768-3.061l20.834-12.029a3.537 3.537 0 0 1 3.535 0L50.75 40.466a3.536 3.536 0 0 1 1.768 3.062v38.835c-8.633 24.959-31.729 34.456-31.729 34.456l-90.252 34.952c-2.446.928-4.132 3.315-4.139 6.012l-.068 25.568c-10.243-7.066-22.51-11.076-35.55-11.076-13.321 0-25.541 3.538-35.858 10.13l.001-24.583a6.46 6.46 0 0 0-4.126-6.024l-90.226-34.979s-34.935-14.362-34.935-54.187V-93.604c0-6.43 5.212-11.642 11.641-11.642H-.013V.007L0 0Z" style="stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; stroke-dasharray: none; stroke-opacity: 1;" transform="translate(351.158 112.762)" fill="none" stroke="#000000" stroke-width="15px" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="none" stroke-opacity="" data-original="#000000"></path><path d="M0 0v-68.031" style="stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; stroke-dasharray: none; stroke-opacity: 1;" transform="translate(379.306 75.546)" fill="none" stroke="#000000" stroke-width="15px" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="none" stroke-opacity="" data-original="#000000"></path><path d="M0 0h220.186v29.223l.013-.008c-10.837 6.373-19.373 16.29-23.98 28.118H0Z" style="stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; stroke-dasharray: none; stroke-opacity: 1;" transform="translate(130.959 83.546)" fill="none" stroke="#000000" stroke-width="15px" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="none" stroke-opacity="" data-original="#000000"></path><path d="M0 0v-149.277" style="stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; stroke-dasharray: none; stroke-opacity: 1;" transform="translate(130.959 156.793)" fill="none" stroke="#000000" stroke-width="15px" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="none" stroke-opacity="" data-original="#000000"></path><path d="M0 0c-27.44 4.663-28.706 27.522-28.706 27.522L-57.66 16.297c18.473-49.42 68.058-44.832 68.058-44.832v16.243C10.398-6.208 6-1.02 0 0Z" style="stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; stroke-dasharray: none; stroke-opacity: 1;" transform="translate(230.66 237.038)" fill="none" stroke="#000000" stroke-width="15px" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="none" stroke-opacity="" data-original="#000000"></path><path d="M0 0c-.219.083-.423.19-.628.295-.621-4.031-4.889-23.53-29.752-27.791-5.945-1.019-10.256-6.238-10.256-12.27V-56.03s50.093-3.546 68.783 45.129z" style="stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; stroke-dasharray: none; stroke-opacity: 1;" transform="translate(281.695 264.533)" fill="none" stroke="#000000" stroke-width="15px" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="none" stroke-opacity="" data-original="#000000"></path><path d="M0 0v-200.987" style="stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; stroke-dasharray: none; stroke-opacity: 1;" transform="translate(241.059 208.502)" fill="none" stroke="#000000" stroke-width="15px" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="none" stroke-opacity="" data-original="#000000"></path><path d="M0 0h-21.414c-6.325 0-11.5-5.175-11.5-11.5v-4c0-6.325 5.175-11.5 11.5-11.5H0c6.325 0 11.5 5.175 11.5 11.5v4C11.5-5.175 6.325 0 0 0Z" style="stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; stroke-dasharray: none; stroke-opacity: 1;" transform="translate(195.53 190.546)" fill="none" stroke="#000000" stroke-width="15px" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="none" stroke-opacity="" data-original="#000000"></path><path d="M0 0h16" style="stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; stroke-dasharray: none; stroke-opacity: 1;" transform="translate(273.592 177.046)" fill="none" stroke="#000000" stroke-width="15px" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="none" stroke-opacity="" data-original="#000000"></path><path d="M0 0h-28.361c-24.485 0-44.333-19.849-44.333-44.333v-48.655c0-10.31 8.357-18.667 18.667-18.667H21.69c16.937 0 31.645 9.501 39.109 23.46.578 1.082 2.221.66 2.221-.567 0-12.592 10.301-22.893 22.893-22.893 6.6 0 12 5.4 12 12v50.773c0 11.962-10.436 20.656-20.809 19.859-5.998-.462-11.5 3.31-12.655 9.213C62.504-9.867 57.582 0 38.354 0H35" style="stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; stroke-dasharray: none; stroke-opacity: 1;" transform="translate(223.529 504.484)" fill="none" stroke="#000000" stroke-width="15px" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="none" stroke-opacity="" data-original="#000000"></path><path d="M0 0v35.046c-8.631-5.044-18.734-7.843-29.511-7.589-9.744.23-18.888 3.008-26.811 7.669V-70.127h47.703A8.62 8.62 0 0 1 0-61.507V-35" style="stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; stroke-dasharray: none; stroke-opacity: 1;" transform="translate(407.467 77.642)" fill="none" stroke="#000000" stroke-width="15px" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="none" stroke-opacity="" data-original="#000000"></path></g></g></svg></div>
	                <h3 class="heading mb-0 pl-3">Servicio de instalación</h3>
                </div>
                <p> Ofrecemos el servicio de instalación en nuestro taller, lo que garantiza una instalación adecuada y segura de nuestros elevadores de neumáticos.</p>
              </div>
            </div>      
          </div>
        </div>
      </div>
    </section>

    <section class="ftco-section">
    	<div class="container-fluid px-4">
    		<div class="row justify-content-center">
          <div class="col-md-12 heading-section text-center ftco-animate mb-5">
          	<span class="subheading">Comprueba como es la</span>
            <h2 class="mb-2">Experiencia De Nuestros Clientes</h2>
          </div>
        </div>
    		<div class="row">
    			<div class="col-lg-4 col-md-3 center">
            <!-- ClFNccSDNvx -->
            <InstagramReel id="ClFNccSDNvx"></InstagramReel>
    			</div>
    			<div class="col-lg-4 col-md-3 center">
            <!-- Ck9tNUbjurI           --> 
            <InstagramReel id="Ck9tNUbjurI"></InstagramReel>
    			</div>
    			<div class="col-lg-4 col-md-3 center">
            <!-- CkwaIoWjbQh -->
            <InstagramReel id="CkwaIoWjbQh"></InstagramReel>
    			</div>
    			<div class="col-lg-4 col-md-3 center">
            <!-- CkO3KIOj6xo -->
            <InstagramReel id="CkO3KIOj6xo"></InstagramReel>
    			</div>
    		</div>
    	</div>
    </section>

    <section class="ftco-section services-section img" style="background-image: url(images/bg_2.jpg);">
    	<div class="overlay"></div>
    	<div class="container">
    		<div class="row justify-content-center mb-5">
          <div class="col-md-7 text-center heading-section heading-section-white ftco-animate">
          	<span class="subheading">Proceso de compra</span>
            <h2 class="mb-3">Como hacer la compra en linea</h2>
          </div>
        </div>
    		<div class="row">
    			<div class="col-md-3 d-flex align-self-stretch ftco-animate">
            <div class="media block-6 services services-2">
              <div class="media-body py-md-4 text-center">
              	<div class="icon d-flex align-items-center justify-content-center">
                  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="40" height="40" x="0" y="0" viewBox="0 0 61 61" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><g fill="#000" fill-rule="nonzero"><path d="M26 5C14.402 5 5 14.402 5 26s9.402 21 21 21 21-9.402 21-21c-.013-11.592-9.408-20.987-21-21zm0 40C15.507 45 7 36.493 7 26S15.507 7 26 7s19 8.507 19 19c-.012 10.489-8.511 18.988-19 19z" fill="#FFFFFF" data-original="#000000" class=""></path><path d="M38.689 21.088 37.761 19H39a1 1 0 0 0 0-2h-2.128l-1.431-3.219A3 3 0 0 0 32.7 12H19.3a3 3 0 0 0-2.742 1.781L15.127 17H13a1 1 0 0 0 0 2h1.239l-.928 2.088A3 3 0 0 0 11 24v8a3 3 0 0 0 2 2.816V36a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3v-1h10v1a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3v-1.184A3 3 0 0 0 41 32v-8a3 3 0 0 0-2.311-2.912zM22 29v-1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v1zm7-4h-6a3 3 0 0 0-3 3v1h-7v-5a1 1 0 0 1 1-1h24a1 1 0 0 1 1 1v5h-7v-1a3 3 0 0 0-3-3zM18.385 14.594A1 1 0 0 1 19.3 14h13.4a1 1 0 0 1 .914.594L36.461 21H15.539c.219-.494 2.512-5.657 2.846-6.406zM19 36a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-1h4zm18 0a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-1h4zm1-3H14a1 1 0 0 1-1-1v-1h26v1a1 1 0 0 1-1 1z" fill="#FFFFFF" data-original="#000000" class=""></path><path d="M17 25h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2zM35 27h1a1 1 0 0 0 0-2h-1a1 1 0 0 0 0 2zM21 19h.1l10-1a1 1 0 1 0-.2-1.99l-10 1a1.001 1.001 0 0 0 .1 2z" fill="#FFFFFF" data-original="#000000" class=""></path><path d="M51.9 46.519c2.465-2.963-1.787-6.658-4.414-4.031l-.383.383-1.449-1.449C53.839 31 52.49 16.006 42.576 7.212 32.663-1.582 17.615-1.133 8.243 8.237c-9.371 9.369-9.824 24.416-1.032 34.332 8.791 9.916 23.785 11.268 34.209 3.086l1.45 1.45-.383.383a2.992 2.992 0 0 0 4.032 4.412l7.972 7.973a3.807 3.807 0 0 0 5.384-5.384zM3 26C3 13.297 13.297 3 26 3s23 10.297 23 23-10.297 23-23 23C13.303 48.986 3.014 38.697 3 26zm39.95 18.356c.487-.45.953-.919 1.4-1.406l1.336 1.335-1.406 1.406zm.95 4.544c1.582-1.574.262-.252 3.914-3.905L48.9 43.9a1 1 0 0 1 1.413 1.414l-5 5A1 1 0 0 1 43.9 48.9zm14.559 9.561a1.831 1.831 0 0 1-2.556 0l-7.954-7.955 2.556-2.556 7.957 7.958a1.785 1.785 0 0 1 0 2.553z" fill="#FFFFFF" data-original="#000000" class=""></path></g></g></svg>
                </div>
                <h3>Busque su vehiculo</h3>
                <p>Busque los productos que necesita con nuestro buscador</p>
              </div>
            </div>      
          </div>
          <div class="col-md-3 d-flex align-self-stretch ftco-animate">
            <div class="media block-6 services services-2">
              <div class="media-body py-md-4 text-center">
              	<div class="icon d-flex align-items-center justify-content-center">
                  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="40" height="40" x="0" y="0" viewBox="0 0 48 48" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path d="M17 44a4 4 0 1 1 4-4 4 4 0 0 1-4 4zm0-6a2 2 0 1 0 2 2 2 2 0 0 0-2-2zM31 44a4 4 0 1 1 4-4 4 4 0 0 1-4 4zm0-6a2 2 0 1 0 2 2 2 2 0 0 0-2-2z" fill="#FFFFFF" data-original="#000000" class=""></path><path d="M37 38H12a5 5 0 0 1 0-10h17a1 1 0 0 1 0 2H12a3 3 0 0 0 0 6h25a1 1 0 0 1 0 2z" fill="#FFFFFF" data-original="#000000" class=""></path><path d="M35.692 30H16.6a2.985 2.985 0 0 1-2.926-2.335L9.378 8.778A1 1 0 0 0 8.4 8H4a1 1 0 0 1 0-2h4.4a2.985 2.985 0 0 1 2.926 2.335l4.293 18.887A1 1 0 0 0 16.6 28h19.1a1 1 0 0 0 .916-.6L42.471 14H40a1 1 0 0 1 0-2h2.471a2 2 0 0 1 1.829 2.8l-5.86 13.4a3 3 0 0 1-2.748 1.8z" fill="#FFFFFF" data-original="#000000" class=""></path><path d="M26 24a10 10 0 1 1 10-10 10.011 10.011 0 0 1-10 10zm0-18a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8z" fill="#FFFFFF" data-original="#000000" class=""></path><path d="M26 18a1 1 0 0 1-1-1v-6a1 1 0 0 1 2 0v6a1 1 0 0 1-1 1z" fill="#FFFFFF" data-original="#000000" class=""></path><path d="M29 15h-6a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2z" fill="#FFFFFF" data-original="#000000" class=""></path></g></svg>
                </div>
                <h3>Agregue al carrito</h3>
                <p>Agregue al carrito lo que desee comprar</p>
              </div>
            </div>      
          </div>
          <div class="col-md-3 d-flex align-self-stretch ftco-animate">
            <div class="media block-6 services services-2">
              <div class="media-body py-md-4 text-center">
              	<div class="icon d-flex align-items-center justify-content-center">
                  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="40" height="40" x="0" y="0" viewBox="0 0 64 64" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><g data-name="Layer 2"><path d="M46.933 50.312c.95-.426 2.195-2.087.837-2.775a.999.999 0 0 0-1.311.528.938.938 0 0 1-.649.549L34.25 51.71a2.999 2.999 0 1 0-.04.01l-11.573 3.1a.993.993 0 0 1-1.223-.703l-2.592-9.682a3.51 3.51 0 0 0 .733-6.065c2.41-1.794 1.566-4.817-1.005-5.997 2.82-2.17 1.143-5.443-1.862-6.368 3.778-3.02-1.356-6.252-4.493-6.3l-2.171-8.09a1.002 1.002 0 0 1 .703-1.223l23.183-6.21a.989.989 0 0 1 1.229.727l5.91 20.07a1 1 0 0 0 .96.717h2.86a1.007 1.007 0 0 0 .966-1.255 25.947 25.947 0 0 1-.376-9.68c.345-3.527-4.102-4.64-5.824-1.663l-2.57-8.725a3.001 3.001 0 0 0-3.675-2.123L10.205 8.463a3.006 3.006 0 0 0-2.113 3.674l2.145 7.992a3.989 3.989 0 0 0 1.351 7.526 3.989 3.989 0 0 0 1.386 5.467 4.008 4.008 0 0 0 1.545 6.28 3.51 3.51 0 0 0 2.283 5.223l2.68 10.006a2.989 2.989 0 0 0 3.674 2.122l4.875-1.305a90.68 90.68 0 0 1 2.024 5.551 1 1 0 0 0 .854.693c1.158.116 2.3.167 3.417.167a43.55 43.55 0 0 0 16.089-3.248 1.007 1.007 0 0 0 .302-1.62 15.533 15.533 0 0 1-3.784-6.68zm-13.224-.525a1 1 0 0 1-.517-1.932 1 1 0 0 1 .517 1.932zm8.062-36.119a.993.993 0 0 1 1.706.827 29.243 29.243 0 0 0 .138 9.202h-.858l-2.368-8.038a8.156 8.156 0 0 1 1.382-1.99zm-23.763 16.03c0 .965-1.76 2-3 2a2 2 0 0 1 0-4c1.24 0 3 1.033 3 2zm-8-6a2.002 2.002 0 0 1 2-2c1.496 0 4 1.252 4 2 .021.754-2.607 2.018-4 2a2.002 2.002 0 0 1-2-2zm6 10c1.24 0 3 1.033 3 2s-1.76 2-3 2a2 2 0 0 1 0-4zm0 7.5a1.5 1.5 0 0 1 3 0 1.5 1.5 0 0 1-3 0zM31.753 59.76c-.3-.895-.913-2.66-1.776-4.833l15.064-4.033a18.167 18.167 0 0 0 3.258 6.4 41.307 41.307 0 0 1-16.546 2.466z" fill="#FFFFFF" data-original="#000000" class=""></path><path d="M55.008 27.697H38.516l-.515-4.124a1 1 0 0 0-.993-.876h-3a1 1 0 0 0 0 2h2.118l1.89 15.124a1 1 0 0 0 .992.876h13a1 1 0 0 0 .965-.737l3-11a1.007 1.007 0 0 0-.965-1.263zm-3.763 11H39.89l-1.125-9H53.7z" fill="#FFFFFF" data-original="#000000" class=""></path><path d="M38.008 43.697a3 3 0 0 0 6 0 3 3 0 0 0-6 0zm3-1a1 1 0 0 1 0 2 1 1 0 0 1 0-2zM48.008 43.697a3 3 0 0 0 6 0 3 3 0 0 0-6 0zm3-1a1 1 0 0 1 0 2 1 1 0 0 1 0-2zM33.008 29.697h-6a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2zM28.008 38.697a1 1 0 0 0 1 1h6a1 1 0 0 0 0-2h-6a1 1 0 0 0-1 1zM34.008 33.697h-10a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2z" fill="#FFFFFF" data-original="#000000" class=""></path></g></g></svg>
                </div>
                <h3>Boton "Pedir"</h3>
                <p>Una vez que hayas agregado todo lo que necesitas al carrito, toca el botón "Pedir" para continuar con el proceso de compra.</p>
              </div>
            </div>      
          </div>
          <div class="col-md-3 d-flex align-self-stretch ftco-animate">
            <div class="media block-6 services services-2">
              <div class="media-body py-md-4 text-center">
              	<div class="icon d-flex align-items-center justify-content-center"><span class="flaticon-review"></span></div>
                <h3>Seleccione un operador</h3>
                <p>Uno de nuestros operadores atendera tu solicitud y te acompañara en el proceso de pago.</p>
              </div>
            </div>      
          </div>
    		</div>
    	</div>
    </section>
<!-- 
    <section class="ftco-section testimony-section">
      <div class="container">
        <div class="row justify-content-center mb-5">
          <div class="col-md-7 text-center heading-section ftco-animate">
          	<span class="subheading">Testimonial</span>
            <h2 class="mb-3">Happy Clients</h2>
          </div>
        </div>
        <div class="row ftco-animate">
          <div class="col-md-12">
            <div class="carousel-testimony owl-carousel ftco-owl">
              <div class="item">
                <div class="testimony-wrap text-center py-4 pb-5">
                  <div class="user-img mb-4" style="background-image: url(images/person_1.jpg)">
                  </div>
                  <div class="text pt-4">
                    <p class="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <p class="name">Roger Scott</p>
                    <span class="position">Marketing Manager</span>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="testimony-wrap text-center py-4 pb-5">
                  <div class="user-img mb-4" style="background-image: url(images/person_2.jpg)">
                  </div>
                  <div class="text pt-4">
                    <p class="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <p class="name">Roger Scott</p>
                    <span class="position">Interface Designer</span>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="testimony-wrap text-center py-4 pb-5">
                  <div class="user-img mb-4" style="background-image: url(images/person_3.jpg)">
                  </div>
                  <div class="text pt-4">
                    <p class="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <p class="name">Roger Scott</p>
                    <span class="position">UI Designer</span>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="testimony-wrap text-center py-4 pb-5">
                  <div class="user-img mb-4" style="background-image: url(images/person_1.jpg)">
                  </div>
                  <div class="text pt-4">
                    <p class="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <p class="name">Roger Scott</p>
                    <span class="position">Web Developer</span>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="testimony-wrap text-center py-4 pb-5">
                  <div class="user-img mb-4" style="background-image: url(images/person_1.jpg)">
                  </div>
                  <div class="text pt-4">
                    <p class="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <p class="name">Roger Scott</p>
                    <span class="position">System Analyst</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> -->


    <footer class="ftco-footer ftco-bg-dark ftco-section">
      <div class="container">
        <div class="row mb-5">
          <div class="col-md">
            <div class="ftco-footer-widget mb-4">
              <h2 class="ftco-heading-2">About Autoroad</h2>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              <ul class="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                <li class="ftco-animate"><a href="#"><span class="icon-twitter"></span></a></li>
                <li class="ftco-animate"><a href="#"><span class="icon-facebook"></span></a></li>
                <li class="ftco-animate"><a href="#"><span class="icon-instagram"></span></a></li>
              </ul>
            </div>
          </div>
          <div class="col-md">
            <div class="ftco-footer-widget mb-4 ml-md-5">
              <h2 class="ftco-heading-2">Encuentranos</h2>
              <div>
                <!-- <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5554.160351514845!2d-64.68541339548344!3d10.149371924652407!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2d73b90385ea8b%3A0xe18f4125af981998!2sELEVA%20PUERTAS!5e0!3m2!1ses-419!2sve!4v1683650502960!5m2!1ses-419!2sve"
                width="350" 
                height="150" 
                style="border:0;" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"></iframe> -->
              </div>
            </div>
          </div>
          <div class="col-md">
             <div class="ftco-footer-widget mb-4">
              <h2 class="ftco-heading-2">Atención al cliente</h2>
              <ul class="list-unstyled">
                <li><a href="#" class="py-2 d-block">ELEVA PUERTAS - EDIFICIO PRANDINI PB LOCAL 2 AV INTERCOMUNAL, CON Calle Guayaquil, Barcelona 6001, Anzoátegui</a></li>
                <li><a href="#" class="py-2 d-block">0412 1919377</a></li>
                <li><a href="#" class="py-2 d-block">lun-vie 8:00am - 4:00pm</a></li>
                <li><a href="#" class="py-2 d-block">sab 8:00am - 1:30pm</a></li>
              </ul>
            </div>
          </div>
          
        </div>
        <div class="row">
          <div class="col-md-12 text-center">

            <p><!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
  Copyright &copy;{{ añoCopyright }} All rights reserved | This template is made with <i class="icon-heart color-danger" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
  <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --></p>
          </div>
        </div>
      </div>
    </footer>
    
  

  <!-- loader -->
  <div id="ftco-loader" class="show fullscreen"><svg class="circular" width="48px" height="48px"><circle class="path-bg" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke="#eeeeee"/><circle class="path" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke-miterlimit="10" stroke="#F96D00"/></svg></div>

  
</div>
</template>

<script setup>

/* eslint-disable */
import { onMounted, ref,} from 'vue';
import InstagramReel from "@/components/vistas/social/InstagramReel.vue"
import SelectForm from "@/components/vistas/form/SelectForm.vue"
import main from "@/js/web/fetcher"
onMounted(()=>{
  var añoCopyright = ref(new Date().getFullYear());
  console.log(main.hola())
})

</script>

<style lang="scss">
@import "assets/scss/style.scss";
#app {
  
}
</style>
