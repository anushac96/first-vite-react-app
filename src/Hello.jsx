function Hello(){

let name = 'Anusha';
let placeName = () =>{
    return 'bangalore';
}

return <h3>
    my name is {name}
    im from {placeName()};
</h3>
}

export default Hello;