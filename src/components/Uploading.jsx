import BarLoader from "react-spinners/BarLoader";

const loaderCSS = `
    border-radius: 15px;
`;

function Uploading() {

  return (
    <div>
        <p>Uploading...</p>
        <BarLoader height={5} width={100} loading={true} speedMultiplier={5} css={loaderCSS} color="aqua" />
    </div>
  )
}

export default Uploading