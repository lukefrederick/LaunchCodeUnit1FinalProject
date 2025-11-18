// Should loop through the data from ChartData.jsx and genererate 10 chart cards with the respective data.
// This will be a table so that I have that included

import ChartData from './ChartData.js'

function ChartPage() {

    return (
        <>
            <h1>Charts</h1>
            <p>What people are listening to right now!</p>
            <table>
                <thead>
                    <tr>
                        <th>Album Name</th>
                        <th>Artist</th>
                        <th>Release Date</th>
                    </tr>
                </thead>
                <tbody>
                    {ChartData.map((album) => (
                        <tr key={album.albumName}>
                            <td>{album.albumName}</td>
                            <td>{album.artistName}</td>
                            <td>{album.releaseDate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default ChartPage;