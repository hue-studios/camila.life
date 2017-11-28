<template>
<div class="ingredient-container grid-x">
   <div class="medium-3 cell ingredient-image">
		<nuxt-link :to="'/plant-based-vegan-products/' + ingredient.url"><img v-bind:src="'http://camila.life' + ingredient.images.data[0].url" :alt="ingredient.name"/> </nuxt-link>
    </div>
    <div class="small-11 medium-8 cell ingredient-details">
    <h1>{{ ingredient.name }}</h1>
    <div class="grid-x sub-title">
    <div class="small-12 medium-5 cell">
    <div class="grid-x">
    <h5 class="small-12 cell category"><span class="prefix">CATEGORY: </span>{{ingredient.category}} </h5>
    <!--<h5 class="small-6 cell" v-if="total > 0"><span class="prefix">FEATURED IN</span> {{total}} RECIPE<span v-if="total > 1">S</span></h5>
    <h5 class="brand" v-if="ingredient.brand"><span class="prefix">BRAND: </span>{{ingredient.brand}}</h5>-->
    </div>
    </div>
    <div class="small-12 medium-7 cell ingredient-icons">
    <div class="icon-svg-container" v-if="ingredient.vegan === 1">
    <svg id="vegan-svg" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 270 270"><title>vegan</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1-2"><path d="M51,50H93.72l42,111.36h.48L178.92,50H219L148.92,220h-30Z"/><rect class="cls-1" width="270" height="270"/></g></g></svg>
    </div>
    <div class="icon-svg-container" v-if="ingredient.organic === 1">
    <svg id="organic-svg" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 270 270"><title>organic</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1-2"><path d="M18.13,135a16.5,16.5,0,0,1,1.37-6.82,15.79,15.79,0,0,1,3.73-5.24,16.58,16.58,0,0,1,5.59-3.34,20.7,20.7,0,0,1,13.72,0,16.48,16.48,0,0,1,5.59,3.34,15.82,15.82,0,0,1,3.74,5.24,17.84,17.84,0,0,1,0,13.65,15.78,15.78,0,0,1-3.74,5.23,16.51,16.51,0,0,1-5.59,3.35,20.7,20.7,0,0,1-13.72,0,16.67,16.67,0,0,1-5.59-3.35,15.76,15.76,0,0,1-3.73-5.23A16.68,16.68,0,0,1,18.13,135Zm9.75,0a8.2,8.2,0,0,0,2.05,5.79A7.44,7.44,0,0,0,35.68,143a7.44,7.44,0,0,0,5.75-2.21,9.2,9.2,0,0,0,0-11.57A7.4,7.4,0,0,0,35.68,127a7.41,7.41,0,0,0-5.75,2.21A8.16,8.16,0,0,0,27.88,135Z"/><path d="M60.58,119.21h9.75v5.06h.13a12,12,0,0,1,3.7-4.38,9.29,9.29,0,0,1,5.4-1.46,16,16,0,0,1,1.69.06,8.2,8.2,0,0,1,1.56.26v8.9a17.12,17.12,0,0,0-2-.48A13.54,13.54,0,0,0,78.7,127a10.31,10.31,0,0,0-4.42.78A5.9,5.9,0,0,0,71.72,130a8.5,8.5,0,0,0-1.14,3.35,32.39,32.39,0,0,0-.25,4.29v13.2H60.58Z"/><path d="M120.64,148.13q0,9-4.52,13.62t-13.75,4.65a37,37,0,0,1-8.32-1,18.89,18.89,0,0,1-7.54-3.67l5.4-8.06a20.07,20.07,0,0,0,4.77,3,13.35,13.35,0,0,0,5.5,1.1c3,0,5.18-.72,6.59-2.17a7.66,7.66,0,0,0,2.12-5.56v-3h-.13a9.25,9.25,0,0,1-4.2,3.21,13.37,13.37,0,0,1-4.71.95A16.14,16.14,0,0,1,95.48,150a14.11,14.11,0,0,1-4.91-3.38,15.08,15.08,0,0,1-3.15-5.16,19.67,19.67,0,0,1-.1-12.68,16.83,16.83,0,0,1,2.86-5.26,14.51,14.51,0,0,1,4.52-3.68,12.9,12.9,0,0,1,6-1.39,15.2,15.2,0,0,1,3.8.45,14.25,14.25,0,0,1,3.09,1.17,11.63,11.63,0,0,1,2.34,1.59,10.19,10.19,0,0,1,1.56,1.72h.13v-4.15h9ZM96.07,134.81a7.6,7.6,0,0,0,2.24,5.42,8.53,8.53,0,0,0,2.47,1.73,7.71,7.71,0,0,0,6.14,0,8.48,8.48,0,0,0,2.5-1.73,7.66,7.66,0,0,0,0-10.83l0,0a8.48,8.48,0,0,0-2.5-1.73,7.71,7.71,0,0,0-6.14,0,8.53,8.53,0,0,0-2.47,1.73,7.57,7.57,0,0,0-2.24,5.43Z"/><path d="M149.89,146.83h-.14a9.15,9.15,0,0,1-4.32,3.64,15,15,0,0,1-9.94.49,10.52,10.52,0,0,1-3.61-1.86,9.08,9.08,0,0,1-2.47-3,9.33,9.33,0,0,1-.91-4.22,9.59,9.59,0,0,1,1-4.62,8.91,8.91,0,0,1,2.73-3.12,14.06,14.06,0,0,1,3.93-1.92,28.79,28.79,0,0,1,4.58-1,41.86,41.86,0,0,1,4.75-.39c1.58-.05,3-.07,4.39-.07a5.1,5.1,0,0,0-1.86-4.13,6.72,6.72,0,0,0-4.38-1.52,9.55,9.55,0,0,0-4.39,1,11.76,11.76,0,0,0-3.54,2.76l-5.2-5.32a17.84,17.84,0,0,1,6.37-3.81,22.72,22.72,0,0,1,7.53-1.26,19.49,19.49,0,0,1,7.06,1.07,10.18,10.18,0,0,1,4.42,3.15,12.38,12.38,0,0,1,2.31,5.1,33.54,33.54,0,0,1,.65,7v16h-9ZM147.48,137c-.74,0-1.66,0-2.76.1a13.84,13.84,0,0,0-3.19.55,7,7,0,0,0-2.6,1.37,3.13,3.13,0,0,0-1.07,2.53,2.77,2.77,0,0,0,1.5,2.6,6.32,6.32,0,0,0,3.12.85,10,10,0,0,0,2.76-.39,8,8,0,0,0,2.37-1.11,5.14,5.14,0,0,0,2.28-4.42V137Z"/><path d="M166.59,119.21H176v4.29h.13a7.55,7.55,0,0,1,1.3-1.82,9.51,9.51,0,0,1,2-1.63,11.23,11.23,0,0,1,5.92-1.62,13.6,13.6,0,0,1,6,1.13,8.58,8.58,0,0,1,3.54,3.16,12.59,12.59,0,0,1,1.72,4.74,35.62,35.62,0,0,1,.46,5.92V150.8h-9.75V135.33a27.34,27.34,0,0,0-.1-2.83,8.93,8.93,0,0,0-.58-2.7,4.71,4.71,0,0,0-1.5-2,4.63,4.63,0,0,0-2.89-.78,6,6,0,0,0-3.06.68,4.65,4.65,0,0,0-1.78,1.82,7.3,7.3,0,0,0-.82,2.57,23.13,23.13,0,0,0-.19,3V150.8h-9.75Z"/><path d="M204.87,109.26a5.67,5.67,0,1,1,1.66,4A5.48,5.48,0,0,1,204.87,109.26Zm.78,9.95h9.75V150.8h-9.75Z"/><path d="M245.43,129.41a5.44,5.44,0,0,0-2-1.72,5.8,5.8,0,0,0-2.8-.68,7.44,7.44,0,0,0-5.75,2.21,9.2,9.2,0,0,0,0,11.57,7.48,7.48,0,0,0,5.75,2.21,5.21,5.21,0,0,0,2.8-.72,8.76,8.76,0,0,0,2-1.69l6.44,6.76a12.36,12.36,0,0,1-5.37,3.28,19.72,19.72,0,0,1-12.74-.22,16.67,16.67,0,0,1-5.59-3.35,15.76,15.76,0,0,1-3.73-5.23,17.66,17.66,0,0,1,0-13.65,15.79,15.79,0,0,1,3.73-5.24,16.58,16.58,0,0,1,5.59-3.34,19.79,19.79,0,0,1,6.86-1.17,20.19,20.19,0,0,1,5.88.94,12.55,12.55,0,0,1,5.37,3.28Z"/><rect class="cls-1" width="270" height="270"/></g></g></svg>
    </div>
    <div class="icon-svg-container" v-if="ingredient.non_gmo === 1">
    <svg id="non-gmo-svg" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 270 270"><title>non-gmo</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1-2"><path d="M39.42,161.08l-12.31-31v31h-8.2V108.92h7.32l12.24,31v-31h8.21v52.16Z"/><path d="M78.11,157.2A12.4,12.4,0,0,1,68,161.67a12.36,12.36,0,0,1-10.11-4.47c-3.45-4.18-3.81-9.82-3.81-22.2s.36-18,3.81-22.2A12.36,12.36,0,0,1,68,108.33a12.4,12.4,0,0,1,10.11,4.47c3.51,4.1,3.81,9.82,3.81,22.2S81.62,153.1,78.11,157.2ZM72,117.71a4.32,4.32,0,0,0-4-2,4.21,4.21,0,0,0-3.89,2c-1.53,2.49-1.83,7.77-1.83,17.29s.3,14.8,1.83,17.29a4.21,4.21,0,0,0,3.89,2,4.32,4.32,0,0,0,4-2c1.54-2.49,1.76-7.77,1.76-17.29S73.49,120.2,72,117.71Z"/><path d="M109.83,161.08l-12.31-31v31h-8.2V108.92h7.32l12.24,31v-31h8.21v52.16Z"/><path d="M124.93,143.64v-7.39h14.8v7.39Z"/><path d="M160,161.67a12.4,12.4,0,0,1-10.11-4.47c-3.44-4.1-3.81-9.82-3.81-22.2s.37-18.1,3.81-22.2A12.4,12.4,0,0,1,160,108.33a12.63,12.63,0,0,1,9.31,3.52c2.56,2.64,3.88,6.45,4,10.91H165.1c-.07-2.85-.66-7-5.13-7a4.2,4.2,0,0,0-3.88,2c-1.61,2.49-1.83,7.77-1.83,17.29s.22,14.8,1.83,17.29a4.2,4.2,0,0,0,3.88,2c3.59,0,5.13-3.08,5.13-6.67v-8.13H160V132.8h13.34v14.43C173.36,156.69,167.86,161.67,160,161.67Z"/><path d="M207.64,161.08V128.55l-7.1,21.4H196l-7-21v32.16h-8.21V108.92h7.4l10.11,27.4,10-27.4h7.47v52.16Z"/><path d="M247.28,157.2a13.67,13.67,0,0,1-19.31.91c-.32-.29-.62-.59-.91-.91-3.44-4.18-3.81-9.82-3.81-22.2s.37-18,3.81-22.2a13.67,13.67,0,0,1,19.31-.91c.32.29.62.59.91.91,3.52,4.1,3.81,9.82,3.81,22.2S250.8,153.1,247.28,157.2Zm-6.15-39.49a4.34,4.34,0,0,0-4-2,4.2,4.2,0,0,0-3.88,2c-1.54,2.49-1.83,7.77-1.83,17.29s.29,14.8,1.83,17.29a4.2,4.2,0,0,0,3.88,2,4.34,4.34,0,0,0,4-2c1.54-2.49,1.76-7.77,1.76-17.29S242.67,120.2,241.13,117.71Z"/><rect class="cls-1" width="270" height="270"/></g></g></svg>
    </div>
    <div class="icon-svg-container" v-if="ingredient.gluten_free === 1">
    <svg id="gluten-free-svg" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 270 270"><title>gluten-free</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1-2"><path d="M47.38,123.28c-5.51,0-9.11-2.17-11.53-5.1C31.92,113.5,31.5,107,31.5,92.85s.42-20.65,4.35-25.33c2.42-2.93,6-5.1,11.53-5.1a14.44,14.44,0,0,1,10.62,4c2.93,3,4.43,7.36,4.6,12.46H53.24c-.09-3.26-.76-8-5.86-8A4.8,4.8,0,0,0,43,73.12C41.11,76,40.86,82,40.86,92.85s.25,16.89,2.09,19.73a4.8,4.8,0,0,0,4.43,2.26c4.1,0,5.86-3.52,5.86-7.61V98H47.38V90.26H62.6v16.47C62.6,117.59,56.33,123.28,47.38,123.28Z"/><path d="M71.13,122.61V63.09h9.36v51.08H96.12v8.44Z"/><path d="M127.22,118.93a14.75,14.75,0,0,1-11,4.35,15,15,0,0,1-11.12-4.35A15.35,15.35,0,0,1,101,108V63.09h9.36v45.39c0,4.27,2.67,6.36,5.85,6.36s5.77-2.09,5.77-6.36V63.09h9.36V108A15.36,15.36,0,0,1,127.22,118.93Z"/><path d="M156.9,71.53v51.08h-9.36V71.53h-9.95V63.09h29.35v8.44Z"/><path d="M173.71,122.61V63.09h25v8.44H183.07V88.42h13.46v8.44H183.07v17.31H198.7v8.44Z"/><path d="M230.22,122.61l-14-35.36v35.36h-9.36V63.09h8.36l14,35.36V63.09h9.36v59.52Z"/><path d="M38.91,131.82v33.85H57.29v4H38.91v37.88H34.42V127.79H60.2v4Z"/><path d="M118.13,207.58l-12-36.87H94.71v36.87H90.23V127.79h14.12c7.85,0,16.14,2.13,16.14,21.52,0,13.22-3.81,18.82-10.09,20.73l12.67,37.54Zm-13.44-75.76h-10v35h10c8.4,0,11.32-5.83,11.32-17.48S113.09,131.82,104.69,131.82Z"/><path d="M153.55,207.58V127.79h25.77v4H158v33.85h18.38v4H158v33.85h21.29v4Z"/><path d="M209.8,207.58V127.79h25.78v4h-21.3v33.85h18.38v4H214.28v33.85h21.3v4Z"/><rect class="cls-1" width="270" height="270"/></g></g></svg>
    </div>
    <div class="icon-svg-container" v-if="ingredient.soy_free === 1">
    <svg id="soy-free-svg" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 270 270"><title>soy-free</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1-2"><rect class="cls-1" width="270" height="270"/><path d="M88.6,142.26c-4.19,4-11,6.79-20.08,6.79s-15.61-2.46-19.94-6.79c-4.91-4.92-6.65-11.27-6.65-22.11H58.12c0,5.49.57,9,2.89,11.56,1.44,1.59,3.9,2.74,7.51,2.74,3.76,0,6.21-1,7.8-2.89,2.17-2.45,2.75-5.92,2.75-11.41,0-11-1.74-13.73-9.68-16.91l-12.28-5C46.7,93.85,42.8,88.22,42.8,72.32c0-9.25,2.74-16.76,8.38-21.82,4.48-3.9,10.26-6.21,17.63-6.21,8.24,0,14.3,2.17,18.49,6.21,5.35,5.2,7.23,12.57,7.23,22.4H78.35c0-4.62-.29-8.24-2.46-11-1.45-1.88-3.76-3-7.23-3a8.65,8.65,0,0,0-6.93,2.89C59.85,63.94,59,67.41,59,71.89c0,8.38,1.3,11,8.53,13.87l12.14,4.91c12.28,5.06,15.6,11.56,15.6,28.9C95.25,130.12,93.81,137.2,88.6,142.26Z"/><path d="M157.68,140.38c-4.2,5.06-10.41,8.81-20,8.81s-15.75-3.75-19.94-8.81c-6.79-8.24-7.51-19.36-7.51-43.78s.72-35.55,7.51-43.79C122,47.76,128.2,44,137.73,44s15.75,3.76,20,8.81c6.93,8.1,7.51,19.37,7.51,43.79S164.61,132.29,157.68,140.38ZM145.54,62.5c-1.45-2.32-3.9-3.91-7.81-3.91s-6.21,1.59-7.65,3.91c-3,4.91-3.62,15.31-3.62,34.1s.58,29.18,3.62,34.1c1.44,2.31,3.75,3.9,7.65,3.9s6.36-1.59,7.81-3.9c3-4.92,3.46-15.32,3.46-34.1S148.57,67.41,145.54,62.5Z"/><path d="M209.41,107.72V148H193.23V107.72L173.28,45.16H191.2L201.32,85.9l10.26-40.74h17.77Z"/><path d="M44.76,156.49v31H61.63v3.7H44.76V226H40.65V152.79H64.3v3.7Z"/><path d="M117.46,226l-11-33.83H96V226H91.85V152.79h13c7.2,0,14.81,2,14.81,19.74,0,12.13-3.5,17.28-9.26,19L122,226Zm-12.34-69.51H96v32.08h9.15c7.71,0,10.38-5.35,10.38-16s-2.7-16.08-10.41-16.08Z"/><path d="M150,226V152.79h23.6v3.7H154.06v31h16.87v3.7H154.06V222.3H173.6V226Z"/><path d="M201.56,226V152.79h23.65v3.7H205.68v31h16.86v3.7H205.68V222.3h19.53V226Z"/></g></g></svg>
    </div>
    <div class="icon-svg-container" v-if="ingredient.casein_free === 1">
    <svg id="casein-free-svg" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 270 270"><title>casein-free</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1-2"><rect class="cls-1" width="270" height="270"/><path d="M58.3,118.2c-2.58,2.43-5.57,3.64-9.94,3.64-5.33,0-8.81-2.1-11.16-4.93-3.8-4.53-4.2-10.83-4.2-24.5s.4-20,4.2-24.49C39.55,65.09,43,63,48.36,63a13.89,13.89,0,0,1,10.11,3.72c2.91,2.66,4.44,7,4.6,12.12H54a10.77,10.77,0,0,0-1.37-5.58,4.63,4.63,0,0,0-4.29-2.1,4.62,4.62,0,0,0-4.28,2.18c-1.78,2.75-2,8.57-2,19.08s.25,16.33,2,19.08a4.6,4.6,0,0,0,4.28,2.19,4.58,4.58,0,0,0,4.29-2.11A11.18,11.18,0,0,0,54,105.92h9C62.91,111.09,61.22,115.54,58.3,118.2Z"/><path d="M94.93,121.2l-2.35-11.4H79.24L77,121.2H67.44L81.59,63.63H90.4l14,57.57ZM86,77.54l-5,24.09h9.86Z"/><path d="M136.24,118c-2.35,2.27-6.15,3.8-11.24,3.8s-8.73-1.37-11.16-3.8c-2.75-2.75-3.72-6.3-3.72-12.37h9.06c0,3.07.32,5,1.61,6.47a5.51,5.51,0,0,0,4.21,1.5c2.1,0,3.48-.57,4.36-1.62,1.22-1.38,1.54-3.32,1.54-6.39,0-6.14-1-7.68-5.42-9.46l-6.87-2.83c-5.82-2.42-8-5.58-8-14.47,0-5.17,1.53-9.38,4.69-12.21a14.51,14.51,0,0,1,9.86-3.47c4.61,0,8,1.21,10.35,3.47,3,2.91,4,7,4,12.53h-9c0-2.58-.17-4.6-1.38-6.14a4.75,4.75,0,0,0-4-1.7,4.85,4.85,0,0,0-3.88,1.62,8.89,8.89,0,0,0-1.54,5.66c0,4.69.73,6.14,4.77,7.76l6.79,2.75c6.88,2.83,8.74,6.47,8.74,16.17C140,111.17,139.15,115.13,136.24,118Z"/><path d="M149.9,121.2V63.63h24.17V71.8H159V88.13h13V96.3H159V113h15.12v8.17Z"/><path d="M183.93,121.2V63.63H193V121.2Z"/><path d="M227.34,121.2,213.76,87v34.2h-9V63.63h8.08l13.5,34.2V63.63h9.06V121.2Z"/><path d="M38.37,130.5v34.18H56.93v4.08H38.37V207H33.84V126.43h26v4.07Z"/><path d="M118.39,207l-12.11-37.23H94.73V207H90.2V126.43h14.27c7.92,0,16.29,2.15,16.29,21.73,0,13.35-3.84,19-10.18,20.94L123.37,207Zm-13.58-76.5H94.73v35.31h10.08c8.48,0,11.43-5.88,11.43-17.65S113.29,130.5,104.81,130.5Z"/><path d="M154.15,207V126.43h26v4.07h-21.5v34.18h18.56v4.08H158.68v34.18h21.5V207Z"/><path d="M211,207V126.43h26v4.07H215.49v34.18h18.57v4.08H215.49v34.18H237V207Z"/></g></g></svg>
    </div>
     </div>
     </div>
		<p>{{truncate(ingredient.description)}}<nuxt-link class="more-link" :to="'/plant-based-vegan-products/' + ingredient.url">read more.</nuxt-link></p>
    
    
    <ingredient-buttons :id="ingredient.id" :product="ingredient"></ingredient-buttons>
    </div>
	</div>	
</template>

<script>
import ingredientButtons from '~/components/ingredientButtons.vue'
import axios from 'axios'

export default {
  props: ['ingredient'],
  data () {
    return {
      recipes: [],
      total: '',
      goesWith: []
    }
  },
  components: {
    ingredientButtons
  },
  created: function () {
    axios.get('http://camila.life/admin/api/1.1/tables/recipe_ingredients/rows/?filters[ingredient][eq]=' + this.ingredient.id).then(response => {
      this.recipes = response.data.data
      this.total = this.recipes.length
    }).catch(e => {
      this.errors.push(e)
    })
    this.goesWith = this.makeArray(this.ingredient.goes_with)
  },
  methods: {
    truncate (str, length, ending) {
      if (str !== null) {
        if (length == null) {
          length = 180
        }
        if (ending == null) {
          ending = '...'
        }
        if (str.length > length) {
          return str.substring(0, length - ending.length) + ending
        } else {
          return str
        }
      } else {
        return str
      }
    },
    makeArray (str) {
      var newArray = str.split(',')
      return newArray
    }
  },
  notifications: {
    showSuccessMsg: {
      type: 'success',
      title: 'successfully added',
      position: 'center',
      color: 'black',
      message: '',
      timeout: 3000,
      cb: function () {
      },
      onClosing: function () {
        var listTotalBadge = document.getElementById('list-total-badge')
        listTotalBadge.classList.remove('pulseEffect')
      },
      onClosed: function () {
        var listTotalBadge = document.getElementById('list-total-badge')
        setTimeout(function () {
          listTotalBadge.classList.add('pulseEffect')
          console.log('closed')
        }, 1000)
      }
    }
  }
}
</script>


<style lang="scss" scoped>
@import './assets/scss/_vars.scss';
.ingredient-container {
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
  max-width: 900px;
  position:relative;
  @media (min-width: $medium) {
    margin-top: 50px;
    margin-bottom: 50px;
  }
  @media (min-width: $large) {
    transition: all .3s $curve;
  }
  .ingredient-image {
    display: flex;
    justify-content: center;
    align-items:center;
    text-align: center;
    margin-top: 30px;
    margin-bottom: 0px;
        flex: 0 0 auto;
    @media (min-width: $medium) {
    justify-content: flex-start;
      margin-top: 0px;
      margin-bottom: 0px;
    }
    img {
      width: 150px;
      height: auto;
      border-radius: 50%;
      border: thin solid $pink;
      padding: 5%;
      @media (min-width: $medium) {
        
      }
    }
  }
  .ingredient-details {
    h1 {
      text-align: center;
      margin-bottom: 0;
      @media (min-width: $medium) {
        text-align: left;
        font-size: 26px;
        line-height: 0.9em;
      }
      @media (min-width: $large) {
        font-size: 32px;
      }
    }
    .sub-title {
      align-items: center;
    }
    h5 {
      text-align: center;
      font-family: $condensed-bold-font;
      @media (min-width: $medium) {
        text-align: left;
       }
      .prefix {
        color: $green;
        font-family: $condensed-font;
      }
    }
    p {
     font-size: 15px;
     line-height: 1.4em;
     font-weight: 900;
     a {
       text-decoration: underline;
     }
     a:hover {
       color: $black;
     }
    }
   .ingredient-icons {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 10px;
      @media (min-width: $medium) {
        justify-content: flex-start;
      }
      .icon-svg-container {
        border-radius: 50%;
        border: thin solid $black;
        width: 45px;
        height: 45px;
        display: flex;
        margin-left: 4px;
        margin-right: 4px;
        justify-content: center;
        align-items: center;
        @media (min-width: $medium) {
         
        }
        svg {
          width: 38px;
          height: 38px;
          @media (min-width: $medium) {
            width: 40px;
            height: 40px;
          }
          .cls-1 {
          fill: none;
          }
        }
      }
    }
  }
}

.ingredient-container::after {
  content: '';
  position:absolute;
  bottom:-40px;
  left: 10%;
  width: 80%;
  height: 1px;
  background: $dark-pink;
}

 
</style>