export default function Notification() {
    return (
        <div style={{
            width:'100%', height:'100%', zIndex:'999',
            position:'absolute', left:0, top:0,
            backgroundColor:"rgba(255,255,255,0.9"}}>
            <div style={{
                maxWidth: "40vw", backgroundColor: "white",
                position: "relative", margin:"43vh auto",
                padding:"2rem",
                textAlign:"center",
                border:"1px solid black",
                }}>
                This website is in active development.
            </div>
        </div>)
}