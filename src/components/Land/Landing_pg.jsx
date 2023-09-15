import React from 'react'
import App from '../../App'

//import userImg from  '../../public/user_profile.png'
function Landing_pg() {
  return (

    <>

      <nav class="bg-white border-gray-200 dark:bg-gray-900">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://flowbite.com/" class="flex items-center">
            <img src="data:image/jpeg;base64,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" class="h-8 mr-3" alt="Flowbite Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
          </a>
          <div class="flex items-center md:order-2">
            <button type="button" class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
              <span class="sr-only">Open user menu</span>
              <img class="w-8 h-8 rounded-full" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK4AAACuCAMAAACY0sbcAAAAhFBMVEX///8wMzj8/PwjJizx8fEtMDXs7OwxMzbo6Oh5ensnKjDj4+P29vbX19gqLTItLjA5Oz8cICdzdHbd3d4AAACIiYq0tbYiIybPz89sbW+SkpMdHiFERkqpqapdX2EnKCq/wMCbm5xQUVMACRQRFx8AAA4GChAWGByeo6NSV1s6OzoSExRu6BByAAALfUlEQVR4nO1caZeiOhA1iSESJRBt9rCKoN3///+9Qu3FcUlE7ZlzHvfbe2OHS6VSW4qaTEaMGDFixIgRI0aMGDFixIgRI/5N4MXUms3mgNnMmi7w3+ZzHXgeBVlix3mtPICq89hOsiCa95z/Md6zwI9rr0jTMCRcUADnnMg0Lbw69oPZ3+b3DbxwEiXTniVjrlsAzT14IVzGKBVAu1OJ02vGXxfyNKrUWyoQgMsuZGqXx0sbsOy1gpFGcvgnytM3VUXTv8cT96KyslhIwRgTcrPJ/ayMnHl/wgBw5uZOVGZ+3m4awSj8RMSZNflLIu7J+qwgFNEi7Lwksi7bAbywokR9hBx2gBDPt36b6J7EZOL4TecyoKCW2fzmLyf9NiwVIaDKsvGjX+L4TQFP5pWQoJRyHWeO2R852fItZIhKXs37FX4TW5W68ORNfM/xmUbxBt5RSLV9HbM/AXKJVAOWFRTxbntq+e8FvGejol8Tr5UUBagB9Q214BSOz2R/6JJfOnNO3oFVanNnoHzwKl+7cOZy5xdsGs4Q2H3iBQ88CQcqdBFnGX4136nfCsS5PX1MMlO74MxtX22E53EDolXB4yuBgBFq4/kr5TuvQzjV9erhhXC/VoNY+IS1riLqCHML+1nL+QVFYVc+a7lT4EkUFoi62ZN2D45ZRim8/ot8cuT1p6N8oq7hcuMi8R69Qn+jkCPuPnnpiHH6EvnOZcGEejJbPHFq2LLu6edtXhPkui8Qg+NSVtQ3AtAhmMZgwdoXsIUDvKYsjJ/qL7DfgGzL15j0kgnU+c9cOmshw8nwa2JqnHHK2uxpy00c5qLGfpm3xH6HBBoUjV6ClReM1MaagKdTy5rNplPz94NzzHdPKp3gKmVcGZ7dhRP4ueJSCpX7gWlmNFecyWo4xW/A0S0o5WYx2ALy3bQh+6KTIGnnxZkJYTwJCleQ5xgeRVhom6jCIoPcHFL5T0CazguVLbR/CGvbISq8Z2QX2wYJz8As4ki1FJ1BbJRjYFGmSrBu+3g+P1cUtQaqgDO3YOycLsSI7lYrYFCHlrnqwWAdXrYKIQk0WMQm4pzrkbGJLuFcosdPmyNcCiZR9zQct9fI9krcxvoXdvra6qPG15eM6B3kIkn7bb9KF4W+Xh98gtIHMxULMkmmf+WsuKoJB7hFpt0hxxNu+0iogyfgHqWv/dWquS7Zo3ypQUzrE6Z92E1YzKUbnXPEkx3RsAXwWv+0NaImJvMqj6xgMtb+Lmj0bBFq9NZwKVHxQGQ2jTlaa13jIucGbKnINf4Y3H1Li3j4/UUpKFlq/zzgOs09gOjEi6cxYWJw5IATsNzazVn40ogtkrbWmGWEymqoY1vUnCqtFZspjRH7hNAHoY6iXOlDoit//MaKpfZX0dqMLWJv+n1ecvQ2zLPhSZKyUH9QEyO70NPtEu1imdTb+Wt0+5hOn0TEBkb3gEJvE62OCjWI7mQGCZ+n/5mp6oInNiCiOOqGJW0BbIx++yaumRnr6VL9alWHwmHFboiQNvrDgUNjulTqHxq9QQQ4hC0Gl7Yx8ODPpWu1jBgEx+eY14LnBjbQM9ddV78aeHQxqMAXeWBTDN6zNokYDnT1QRkE6ZJ6Q/xwULDOJDyyDX0wQqHe54DlbfTBxcW/AydRmq1viA+Tty9DJAdccGPwacxkV5zmQrp+Ea2Je43gRCb3n7WFHbr6+AYwq10zvqI2sf8Q5RB9HnqGaVwUO/0RxRBadGZ0jQ7uZL4TZECIbuWE50aJU8SMLK/hgbdibvjcE8xqzs3eEi+Nkh9uZv0h4eJGWvMHXSXI0kyHzCJefdK3x2JJqGkx+QfmHiWm9X0T0ysNCzTYJtR7Ld2p0sW8jCvD4/MLdPu7ptvHTbil4VK/QReSltt0U+NqB9AVA+jOFDc9anu+6Q35uuZs+6NmkDKf0zU2ZEe+9Kr+EnZHJQkMmZn7O4WV8+Kum9rIu+TdQOTyroBwoJuYxuTeONlm5EwhKGH3lZgHOmHjEOcHIh81xc+LKt549/aTriDE0VenzmAcQP7Ewqnqdi2JABDZtnV1dyvfwACyD89Jed+f7Fv4Z4Gf10rVuR/MBjy2JCgc0n8auLR52q29OSA5KYYkP5FHIUIdIB986GwcdgE5OLU0TdxPHjbgOacYnLj3ZZHuXgO4sOZRUPn9hwjJNojm1r1n3FojCIyHvLZZ0enno8rMr8m67eQeTbMOaz8r73rl6I2FwyqmgUTNHZe0kb9jaXpa4KNcpmx3j+mtOjawpNcXTE1rrdOMgbWlF67cGQULzDLTft9a0IEF077W2hjt5LzyWvdqPNZfUrVeZXR+LLOa8kUknVH9Bwc7KTTZMHO7OlvojVtAhhb791cpZKndw1VeGBX1CMlX2sWGX6WAVVL6i6rF9u1ik8glleBvurYRR1FhmtSdAVcSkRt+GLZ2ZmuynlN09m0NzkIE8c1QZxMJdDv2XNXmtfMeLFTX+wTwZLoMGS8Hkt2H6OjjmtHEhw7ku8AQJzdagJ0WXNrgDgE8yQhLr9WQ8b419G5wr7z6QFsi/kgQOGeIra9pQ2l+K2HGd9oiyh5qPPavX3rO2kFsERLNFUp+ishjvUOzNaXvF23ZTBWmVfMzvu8X+TqwW+sH20xBnYpLqdN0aXwVfI7iUk8HTohx3e8K+k87qPt+wfhk6XC2yE0vRHqrd0ofbzJNwHKfF5KdtwfYAv5sbcAYxx0alAKfAvJ+tC7/+J8L87u/y+D1qTsGq9gyccOHGKNq0JkfB2f5GKj8o2tvocRdycB1eLzPR34uvjLvYbiGPyUJmdbgQPcUkWSu+zPuxVX3KFuIdk70NKCUhs9p5u77s7j6YRBnZjdTt0HdH8Z3rsDbP37OjvR2oA75938nTxDuaSPRLkTFgKLuFUSui5qvO0d8V4h7FVQeAluwYf4HE8/8/Clr0XczZfAM4QLdzx5OHLguWz/zM3JsdxAsHt8/DocGC6eQR/2K+k+Uls/8yHBi5SES7cH2OOxRq7sHOXZdrz5cRAaU92/yXdUFE58PyB+WL4Oze8iLHVi2qPU58p0AITC+z4shoVx+PEr3Iz7YMacuvrbtiQCnHgrK2epQPEqGxuYHsqIFI9sbhhUrGCcv+W6vZCDf9XGuQlkbdwydI63Lgwwi0FtxI3l7AL18YfFPdzwfLGCxSeaHPQpAAEK+hG2P8gO2jvvHO5OSXfokSQPmduhzVoLvCsTbl7Ht7QPYsI/PFh289eSdEhah99msPctbl5FXfpIPfPOGsf3Ag/1DV4nXmUuYscZLnMNC+4EH7CN/Idselg0awF3/GK/jVZWuDTML0XbV6jjvYuFTgvh6+fL5IjgTnAqivj7Nn2Y1IYKxG58o9QVpQurDh4z9IKpSEcoKd/vyYR2AaAchGUhm9fWo0s/d7sb3aqQpcr/8euFVDEaFpvVvTB/qq6RJyhGT33oI56asYrZpCKVHLQVp7x21IE3L4qqcTT4vBp2k7yTgYfJrM8pw9N65qB/j8yPlXFjRNvaaTdv1M9TCMO269brz4m1p/fjV1PdgG4T0fm+MT49KgUbQZm07p0nyYuaU2bZKkmQbBM7smJ4fqS0cu93PVlJPyXnvwaoSKetHUC31I6iOWpAt2/3UKpK82HydE+g1wm777pD9gC+tQbKCpSrC/tit7d/Vg2/MbMQLRmk/K6+6NT6tqhvC9+MAmf3XpgD2w222sbsflsebt+58ON1qP5zuo+16Iyckj80uA18Iq0zeN/txepTLRiK1iz9H/8W7w+g/epi1p5L7brNfBLyIfK/bj38E3aTia7AiF/tWOMHDsPP86F8auXkYW0mklMeplUIIoC3DH2Mr/yG6k8NQ0O1xKChDx6Gg2+NQ0H8Ox5pMP3J1vsfXyNV/ku6IESNGjBgxYsSIESNGjBgx4v+O/wBqvcFGJWRnPgAAAABJRU5ErkJggg==" alt="user photo" />
            </button>

            <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
              <div class="px-4 py-3">
                <span class="block text-sm text-gray-900 dark:text-white">Kourtass IKRAM</span>
                <span class="block text-sm  text-gray-500 truncate dark:text-gray-400">Ikramkourtasse1234@gmail.com</span>
              </div>
              <ul class="py-2" aria-labelledby="user-menu-button">
                <li>
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Profile information </a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit Profile</a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                </li>
              </ul>
            </div>
            <button data-collapse-toggle="navbar-user" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
              <span class="sr-only">Open main menu</span>
              <svg class="w-5 h-5" aria-hidden="true" xmlns="" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>

            </button>
          </div>
          <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
            <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a href="#" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
              </li>
              <li>
                <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
              </li>
              <li>
                <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
              </li>
              <li>
                <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Pricing</a>
              </li>
              <li>
                <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <br />
      <br />
      <br />
      <>

        <div className="flex justify-around w-full" >

          <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-5">
            <a href="#">
              <img class="p-8 rounded-t-lg" src="https://m.media-amazon.com/images/I/91NrMD1SIfL._AC_UL480_FMwebp_QL65_.jpg" />
            </a>
            <div class="px-5 pb-5">
              <a href="#">
                <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</h5>
              </a>
              <div class="flex items-center mt-2.5 mb-5">
                <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
              </div>
            </div>
          </div>

          <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img class="p-8 rounded-t-lg" src="https://m.media-amazon.com/images/I/81OkWjcf4WL._AC_UL480_FMwebp_QL65_.jpg" />
            </a>
            <div class="px-5 pb-5">
              <a href="#">
                <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</h5>
              </a>
              <div class="flex items-center mt-2.5 mb-5">
                <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
              </div>
            </div>
          </div>

          <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img class="p-8 rounded-t-lg" src="https://m.media-amazon.com/images/I/71KnOamOInL._AC_UL480_FMwebp_QL65_.jpg" />
            </a>
            <div class="px-5 pb-5">
              <a href="#">
                <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</h5>
              </a>
              <div class="flex items-center mt-2.5 mb-5">
                <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
              </div>
            </div>
          </div>
        </div>

      </>
    </>
  );
}

export default Landing_pg;
