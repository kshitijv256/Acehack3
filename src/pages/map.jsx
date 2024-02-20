const AddressMap=()=>{
    return(
      <div id="map" className="google-map-code flex flex-col items-center relative backdrop-blur-xl justify-evenly gap-6 py-10">
        <div className="text-5xl font-bold text-white">How to <span className="grad-text">Reach?</span></div>
        <div className="w-4/5 border-[16px] rounded border-sky-400"><iframe width="100%" height="500" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&height=500&hl=en&q=University%20of%20Engineering%20and%20Mangement%20Jaipur+(University%20of%20Engineering%20and%20Mangement%20Jaipur)&t=&z=12&ie=UTF8&iwloc=B&output=embed"><a href="https://www.maps.ie/distance-area-calculator.html">measure acres/hectares on map</a></iframe></div>
        <div className="text-2xl font-bold text-white">University of Engineering and Management, Jaipur</div>
      </div>
  
    );
}

export default AddressMap;