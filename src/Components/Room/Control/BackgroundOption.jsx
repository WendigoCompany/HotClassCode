export default function BackgroundOption({img, handle }) {
    return <>
        <div
            style={{
                backgroundColor: "red",
                width: "100px",
                height: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundImage: `url("${img}")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                cursor: "pointer"
            }}
            onClick={() => {
                document.getElementById("input-file").click();
            }}
        >
            <input
                id="input-file"
                style={{ display: 'none' }}
                type="file"
                accept="image/*"
                onClick={(e) => e.stopPropagation()}
                onChange={handle}
            />
        </div>
    </>


}