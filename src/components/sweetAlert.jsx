import Swal from 'sweetalert2';

 const sweetAlert = () => {
    Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success"
      });
    return (
        <div>
            <button onClick={sweetAlert}>Click me</button>
        </div>
    )
}; 

export default sweetAlert;