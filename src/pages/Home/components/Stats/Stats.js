import React, { useState } from "react";
import { Card, Text } from "../../../../components";
import DatePicker from "react-date-picker";

const Stats = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div className="grid grid-cols-10 gap-3">
      <div className="col-span-4 w-full">

        <div className='stats-data-container space-y-1 w-full'>
          <div className='bg-white w-full shadow-xs border border-gray-200 rounded-md flex flex-col items-start space-y-1'>
            <div className='w-full'>
              <div class="w-full">
                <div class="h-full flex items-center p-2">
                  <div class="w-12 h-12 bg-gray-100 object-cover object-center flex-shrink-0 rounded-md mr-3">
                    <svg class="w-7 h-7 text-center text-indigo-600 mx-auto mt-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"></path></svg>
                  </div>
                  <div class="flex-grow">
                    <div className='flex flex-row justify-between'>
                      <div>
                        <p class="text-gray-600 text-sm title-font font-bold">Showing Data For <sup style={{ padding: '0.2rem' }} className='bg-yellow-300 text-white rounded-sm'>Today</sup></p>
                        <small class="text-gray-500">Below are the updated statistics.</small>
                      </div>
                      <div class="relative inline-block text-left">
                        <div>
                          <button type="button" class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-2 py-1 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="menu-button" aria-expanded="true" aria-haspopup="true">
                            Today
                <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                            </svg>
                          </button>
                        </div>
                        <div class="hidden origin-top-right absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                          <div class="py-1" role="none">
                            <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Account settings</a>
                            <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Support</a>
                            <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">License</a>
                            <form method="POST" action="#" role="none">
                              <button type="submit" class="text-gray-700 block w-full text-left px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-3">
                                Sign out
                  </button>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='avaliable-stats-container w-full p-2 pt-0'>
              <div className='w-full flex flex-row justify-between space-x-1'>
                <div className='bg-indigo-50 border border-gray-100 rounded-md shadow-sm p-2 flex flex-col space-y-1'>
                  <div>
                    <div class="w-9 h-9 bg-red-300 object-cover object-center flex-shrink-0 rounded-md mr-3">
                      <svg class="w-7 h-7 mx-auto pt-1 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd"></path></svg>
                    </div>
                  </div>
                  <div className='flex flex-row space-x-1 items-center'>
                    <svg class="w-4 h-4 text-green-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12a1 1 0 102 0V6.414l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L5 6.414V12zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z"></path></svg>
                    <p className='text-sm font-bold text-blue-600'>48,59558</p>
                  </div>
                  <p className='text-xs font-bold text-gray-700 capitalize'>
                    conversions
                  </p>
                </div>
                <div className='bg-indigo-50 border border-gray-100 rounded-md shadow-sm p-2 flex flex-col space-y-1'>
                  <div>
                    <div class="w-9 h-9 bg-blue-400 object-cover object-center flex-shrink-0 rounded-md mr-3">
                      <svg class="w-7 h-7 mx-auto pt-1 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clip-rule="evenodd"></path></svg>
                    </div>
                  </div>
                  <div className='flex flex-row space-x-1 items-center'>
                    <svg class="w-4 h-4 text-green-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12a1 1 0 102 0V6.414l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L5 6.414V12zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z"></path></svg>
                    <p className='text-sm font-bold text-blue-600'>18,752.35</p>
                  </div>
                  <p className='text-xs font-bold text-gray-700 capitalize'>
                    Revenue
                  </p>
                </div>
                <div className='bg-indigo-50 border border-gray-100 rounded-md shadow-sm p-2 flex flex-col space-y-1'>
                  <div>
                    <div class="w-9 h-9 bg-purple-400 object-cover object-center flex-shrink-0 rounded-md mr-3">
                      <svg class="w-7 h-7 mx-auto pt-1 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"></path></svg>
                    </div>
                  </div>
                  <div className='flex flex-row space-x-1 items-center'>
                    <svg class="w-4 h-4 text-green-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12a1 1 0 102 0V6.414l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L5 6.414V12zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z"></path></svg>
                    <p className='text-sm font-bold text-blue-600'>18,752.35</p>
                  </div>
                  <p className='text-xs font-bold text-gray-700 capitalize'>
                    Payout
                  </p>
                </div>
                <div className='bg-indigo-50 border border-gray-100 rounded-md shadow-sm p-2 flex flex-col space-y-1'>
                  <div>
                    <div class="w-9 h-9 bg-green-400 object-cover object-center flex-shrink-0 rounded-md mr-3">
                      <svg class="w-7 h-7 mx-auto pt-1 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clip-rule="evenodd"></path></svg>
                    </div>
                  </div>
                  <div className='flex flex-row space-x-1 items-center'>
                    <svg class="w-4 h-4 text-green-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12a1 1 0 102 0V6.414l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L5 6.414V12zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z"></path></svg>
                    <p className='text-sm font-bold text-blue-600'>18,752.35</p>
                  </div>
                  <p className='text-xs font-bold text-gray-700 capitalize'>
                    Earning
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-4 w-full">
        <div className='overalldata-main-container bg-white rounded-md border border-gray-200 w-full flex flex-col py-3 space-y-2 px-2'>
          <div className='w-full grid grid-cols-12 gap-2'>
            <div className="col-span-4 w-full">
              <div class="w-full">
                <div style={{background:'#FFEDE9'}} class="border border-gray-100 shadow-sm h-full flex items-center  p-2 rounded-lg">
                  <div class="w-10 h-10 bg-red-400 rounded-md mr-2">
                    <svg class="w-8 h-8 mx-auto pt-2 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clip-rule="evenodd"></path></svg>
                  </div>
                  <div class="ml-1 flex-grow">
                    <p style={{ fontFamily: 'Nunito' }} class="w-10 text-gray-800 text-xs title-font font-extrabold break-words">Total Offers</p>
                    <p class="text-blue-500 text-sm font-semibold">250</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-4 w-full">
              <div class="w-full">
                <div style={{background:'#EFEBFA'}}  class="bg-white border border-gray-100 shadow-sm h-full flex items-center p-2 rounded-lg">
                  <div class="w-10 h-10 bg-green-400 object-cover object-center flex-shrink-0 rounded-md mr-2">
                    <svg class="w-8 h-8 mx-auto pt-2 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path></svg>
                  </div>
                  <div class="ml-1 flex-grow">
                    <h2 style={{ fontFamily: 'Nunito' }} class="w-10 text-gray-800 text-xs title-font font-extrabold break-words">Active Offers</h2>
                    <p class="text-blue-500 text-sm font-semibold">689</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-4 w-full">
              <div class="w-full">
                <div style={{background:'#D9F3F4'}} class="bg-white border border-gray-100 shadow-sm h-full flex items-center p-2 rounded-lg">
                  <div class="w-10 h-10 bg-yellow-400 object-cover object-center flex-shrink-0 rounded-md mr-2">
                    <svg class="w-8 h-8 mx-auto pt-2 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
                  </div>
                  <div class="ml-1 flex-grow">
                    <p style={{ fontFamily: 'Nunito' }} class="text-gray-800  text-xs title-font font-extrabold">Pending</p>
                    <p style={{ fontFamily: 'Nunito' }} class="text-gray-800 w-16 text-xs truncate title-font font-extrabold">Applications</p>
                    <p class="text-blue-500 text-sm font-semibold">689</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full grid grid-cols-12 gap-2'>
            <div className="col-span-4 w-full">
              <div class="w-full">
                <div style={{background:'#F6F6FB'}} class="bg-white border border-gray-100 shadow-sm h-full flex items-center p-2 rounded-lg">
                  <div class="w-10 h-10 bg-blue-400 object-cover object-center flex-shrink-0 rounded-md mr-2">
                    <svg class="w-8 h-8 mx-auto pt-2 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path></svg>
                  </div>
                  <div class="ml-1 flex-grow">
                    <h2 style={{ fontFamily: 'Nunito' }} class="w-14 text-gray-800 text-xs title-font font-extrabold break-words">Total Affiliates</h2>
                    <p class="text-blue-500 text-sm font-semibold">250</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-4 w-full">
              <div class="w-full">
                <div style={{background:'#FFF4E0'}} class="bg-white border border-gray-100 shadow-sm h-full flex items-center p-2 rounded-lg">
                  <div class="w-10 h-10 bg-pink-400 object-cover object-center flex-shrink-0 rounded-md mr-2">
                    <svg class="w-8 h-8 mx-auto pt-2 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg>
                  </div>
                  <div class="ml-1 flex-grow">
                    <h2 style={{ fontFamily: 'Nunito' }} class="text-gray-800 text-xs title-font font-extrabold">Active Affiliates</h2>
                    <p class="text-blue-500 text-sm font-semibold">689</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-4 w-full">
              <div class="w-full">
                <div style={{background:'#ECF2E8'}}class="bg-white border border-gray-100 shadow-sm h-full flex items-center p-2 rounded-lg">
                  <div class="w-10 h-10 bg-purple-400 object-cover object-center flex-shrink-0 rounded-md mr-2">
                    <svg class="w-8 h-8 mx-auto pt-2 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 6a3 3 0 11-6 0 3 3 0 016 0zM14 17a6 6 0 00-12 0h12zM13 8a1 1 0 100 2h4a1 1 0 100-2h-4z"></path></svg>
                  </div>
                  <div class="ml-1 flex-grow">
                    <h2 style={{ fontFamily: 'Nunito' }} class="text-gray-800 text-xs title-font font-extrabold"> Pending Affiliates</h2>
                    <p class="text-blue-500 text-sm font-semibold">689</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-2">
        <div className='emp-main-login-container bg-white w-full shadow-xs border border-gray-200 rounded-md'>
          <div className='flex flex-col space-y-1'>
            <div className='px-2 py-1 flex flex-row space-x-2 items-center'>
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path></svg>
              <p className='text-sm font-bold text-gray-600'>Employee Sign In Logs</p>
            </div>
            <div className='flex flex-col space-y-1'>
              <div class="w-full bg-blue-50 py-2">
                <div class="h-full flex items-center px-2 rounded-lg">
                  <div class="w-7 h-7 bg-red-400 object-cover object-center flex-shrink-0 rounded-md mr-2">
                    <svg class="w-6 h-6 mx-auto pt-1 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z" clip-rule="evenodd"></path></svg>
                  </div>
                  <div class="flex-grow">
                    <div className='flex flex-row justify-between'>
                      <div>
                        <h2 class="text-gray-900 title-font text-xs font-medium">Holden Caulfield</h2>
                        <p class="text-gray-400 text-xs">UI Designer</p>
                      </div>
                      <small class="text-gray-400 text-xs">20-6-2021</small>
                    </div>
                  </div>
                </div>
              </div>



              <div class="w-full py-1">
                <div class="h-full flex items-center px-2 rounded-lg">
                  <div class="w-7 h-7 bg-red-400 object-cover object-center flex-shrink-0 rounded-md mr-2">
                    <svg class="w-6 h-6 mx-auto pt-1 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z" clip-rule="evenodd"></path></svg>
                  </div>
                  <div class="flex-grow">
                    <div className='flex flex-row justify-between'>
                      <div>
                        <h2 class="text-gray-900 title-font text-xs font-medium">Holden Caulfield</h2>
                        <p class="text-gray-400 text-xs">UI Designer</p>
                      </div>
                      <small class="text-gray-400 text-xs">20-6-2021</small>
                    </div>
                  </div>
                </div>
              </div>


              <div class="w-full bg-blue-50 py-1">
                <div class="h-full flex items-center px-2 rounded-lg">
                  <div class="w-7 h-7 bg-red-400 object-cover object-center flex-shrink-0 rounded-md mr-2">
                    <svg class="w-6 h-6 mx-auto pt-1 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z" clip-rule="evenodd"></path></svg>
                  </div>
                  <div class="flex-grow">
                    <div className='flex flex-row justify-between'>
                      <div>
                        <h2 class="text-gray-900 title-font text-xs font-medium">Holden Caulfield</h2>
                        <p class="text-gray-400 text-xs">UI Designer</p>
                      </div>
                      <small class="text-gray-400 text-xs">20-6-2021</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
