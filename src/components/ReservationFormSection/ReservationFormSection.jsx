import "./ReservationFormSection.css"

export default function ReservationFormSection() {

    return(
        <>
            <div className="ReservationSectionBackground">
                <div className="ReservationForm">
                    <h1 className="ReservationFormTitle">Reserve Your Table</h1>
                    <div className="ReservationFormContainer">
                        <form>
                            <div className="FormRow">
                            <div className="FormSection">
                            <label className="FormLabel" for="FullName">Full Name</label>
                            <input type="text" id="FullName" name="FullName" required/>
                            </div>
                            <div className="FormSection">
                            <label className="FormLabel" for="FullName">Seat Selection</label>
                            <input type="text" id="SeatSelection" name="SeatSelection" required/>
                            </div>
                            </div>

                            <div className="FormRow">
                            <div className="FormSection">
                            <label className="FormLabel" for="FullName">Date</label>
                            <input type="date" id="Date" name="Date" required/>
                            </div>
                            <div className="FormSection">
                            <label className="FormLabel" for="FullName">Number of Guests</label>
                            <input type="text" id="NumberOfGuests" name="NumberOfGuests" required/>
                            </div>
                            </div>

                            <div className="FormRow">
                            <div className="FormSection">
                            <label className="FormLabel" for="FullName">Email</label>
                            <input type="email" id="Email" name="Email" required/>
                            </div>
                            <div className="FormSection">
                            <label className="FormLabel" for="FullName">Phone Number</label>
                            <input type="text" id="PhoneNumber" name="PhoneNumber" required/>
                            </div>
                            </div>

                            <div className="FormRow Notes">
                            <div className="FormSection">
                                <label className="FormLabel" for="SpecialNotes">Special Notes</label>
                                <textarea rows={6} id="SpecialNotes" name="SpecialNotes"/>
                            </div>
                            </div>

                            <div className="FormRow">
                            <div className="FormSection">
                                <input className="FormSubmitButton" type="submit" value="Reserve Table"/>
                            </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}