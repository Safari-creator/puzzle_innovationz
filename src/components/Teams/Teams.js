import { useState } from "react";
import axios from "axios";
import Modal from "react-modal";
import './Teams.css';
import { render } from "@testing-library/react";

Modal.setAppElement('#root')
const Teams = () => {

    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [connections, setConnections] = useState('');
    const [campaigns, setCampaigns] = useState('');
    const [image, setImage] = useState('');
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const handleName = (event) => {
        setName(event.target.value);
        console.log(event.target.value);
    }

    const handleTitle = (event) => {
        setTitle(event.target.value);
        console.log(event.target.value);
    }

    const handleConnections = (event) => {
        setConnections(event.target.value);
        console.log(event.target.value);
    }

    const handleCampaigns = (event) => {
        setCampaigns(event.target.value);
        console.log(event.target.value);
    }

    const handleImage = (event) => {
        setImage(event.target.files[0]);
        console.log(event.target.files[0]);
        getBase64(event.target.files[0]);
    }

    const getBase64 = (file) => {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setImage((previos) => {
                return {
                    ...previos,
                    image: reader.result
                }
            });
        };
        reader.onerror = function (error) {
            console.log("Error: ", error);
        };
    };

    const handleSubmit = (event) => {
        setModalIsOpen(false)
        console.log(name);
        event.preventDefault();
    }

    return (
        <div>
            <div className="modal-button"> <button onClick={() => setModalIsOpen(true)}>Add Account</button> </div>
            <div className="details-display">
                <div>Name: {name}</div>
                <div>Title: {title}</div>
                <div>Connections: {connections}</div>
                <div>Campaigns: {campaigns}</div>
                <div class="image-display"><img src={image.image} height={100} width={100}></img></div>
            </div>

            <Modal
                isOpen={modalIsOpen}
                // shouldCloseOnOverlayClick={false}
                onRequestClose={() => setModalIsOpen(false)}
                style={
                    {
                        overlay: {
                            backgroundColor: 'grey'
                        },
                        content: {
                            color: 'orange'
                        }
                    }
                }>
                <form onSubmit={handleSubmit}>
                    <div className="modal-form">
                        <div> <input type="text" value={name} placeholder="name" onChange={handleName}></input> </div>
                        <div> <input type="text" value={title} placeholder="title" onChange={handleTitle}></input> </div>
                        <div> <input type="text" value={connections} placeholder="connections" onChange={handleConnections}></input> </div>
                        <div> <input type="text" value={campaigns} placeholder="campaigns" onChange={handleCampaigns}></input> </div>
                        <div> <input type="file" placeholder="upload image" onChange={handleImage}></input>
                            {/* <button onClick={}>Upload</button> */}
                        </div>
                        <div> <input type="submit" value="Submit" /> </div>
                    </div>
                </form>
                <div className="close-button"><button onClick={() => setModalIsOpen(false)}>Close</button></div>
            </Modal>
        </div>


    );

}
export default Teams;