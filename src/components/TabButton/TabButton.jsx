export default function TabButton(prop)
{

    /* below is one way to handle event
    function handleClick(){
        console.log(prop.children +" Button Clicked");
    }

    return <li><button onClick={handleClick}>{prop.children}</button></li> */

    //Another way to handle event
    return ( <li><button className={prop.isSelected ? 'active' : undefined}  onClick={prop.onSelect}>{prop.children}</button></li> );
}