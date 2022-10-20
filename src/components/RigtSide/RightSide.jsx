import "./RightSide.css";

const RightSide = () => {
  return (
    <div className="RightSide">
    <h3>Tracking Donors Location</h3>
     <div class="gmap_canvas">
     <iframe width="300" height="590" id="gmap_canvas" src="https://maps.google.com/maps?q=karen&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
     <a href="https://www.embedgooglemap.net/blog/divi-discount-code-elegant-themes-coupon/"></a>
       {/* <button type="submit" onSubmit>Send Request</button>               */}
     </div>
  </div>
  );
};

export default RightSide;