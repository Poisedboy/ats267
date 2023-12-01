import './team-content.css'
import rrriott from '../../assets/team/rrriott.jpg';
import olexander from '../../assets/team/olexander.jpg';
import natalia from '../../assets/team/natalia.jpg';
import maryna from '../../assets/team/maryna.jpg';
import alex from '../../assets/team/alex.jpg';

const TeamContent = () => {
    const team = [
        { id: 1, name: 'Arsenty', position: 'Founder and co-participant of CO \'CF\' ATS 267, member of administration', instagram: 'https://www.instagram.com/rrriott/', photo: rrriott, text: 'Before the war began, Arsenty went on a big trip to Asia. At the moment, he supports our activity and the Ukrainian Armed Forces remotely with donations.' },
        { id: 2, name: 'Aleksandr', position: 'CEO, founder and co-participant of CO \'CF\' ATS 267', instagram: 'https://www.instagram.com/effulgenzy/', photo: olexander, text: 'CEO and a director of ATS 267. Aleksander is managing our place 24/7 hours. He’s responsible for creating art and content for ATS 267, hosting refugees, cooperation with partners, media and other administrative questions.' },
        { id: 3, name: 'Natalia', position: 'A volunteer. Joined our team in February, 2022 when we opened a refugee center', instagram: 'https://www.instagram.com/lookat.nat/', photo: natalia, text: 'A volunteer. Joined our team in February, 2022 when we opened a refugee center. At the moment, Natallia is responsible for collaboration with partners,  sending humanitarian aid to people in need, fundraising, events organization and social media pages of ATS 267.' },
        { id: 4, name: 'Maryna', position: 'A volunteer. Joined our team as an artist in 2021', instagram: 'https://www.instagram.com/msfranchesko/', photo: maryna, text: 'A volunteer. Joined our team as an artist in 2021. When the war began, Maryna became a volunteer to provide assistance to refugees coming to ATS 267 and to people in need. Maryna is responsible for working with refugees and volunteer centers.' },
        { id: 5, name: 'Olexandr', position: 'Solving general issues and issues of organizational development', instagram: 'https://www.instagram.com/club_40_plus/', photo: alex, text: 'Born in Izium, Kharkiv region, Ukraine. Childhood and youth were spent in Eastern Ukraine. Graduated from MAUP (International University of Business and Law). From 1995 to 2007 worked in the structure of the State Emergency Service of Ukraine, and from 2008 worked in the commercial sector in senior positions. In 2014, founded the civic organization "Association for Ukrainian Unity", and was involved in volunteer activities. Joined our team in December 2022, responsible for solving general issues and organizational development issues.' },
    ];
    return (
        <div className='container'>
            <div className="column-layout">
                {team.map(element => (
                    <div
                        key={element.id}
                        className='element'
                    >
                        <img src={element.photo} alt='pics' />
                        <h3>{element.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TeamContent
