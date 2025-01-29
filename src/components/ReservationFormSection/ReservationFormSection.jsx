import "./ReservationFormSection.css";
import { useFormik } from "formik";
import * as Yup from 'yup';

export default function ReservationFormSection() {
  const formik = useFormik({
    initialValues: {
      FullName: "",
      SeatSelection: "Indoors",
      Date: "",
      NumberOfGuests: "",
      Email: "",
      PhoneNumber: "",
      SpecialNotes: "",
    },
    onSubmit: (values) => {
      alert(`Your reservation for ${values.FullName} on ${values.Date} was succesful!`);
    },
    validationSchema: Yup.object({
        FullName: Yup.string().required('Full Name is required'),
        SeatSelection: Yup.string().required('Seat Selection is required'),
        Date: Yup.string().required("Date is required"),
        NumberOfGuests: Yup.number().min(1, "Must be at least 1").required("Number of Guests is required"),
        Email: Yup.string().email("Invalid email address").required("Email is required"),
        PhoneNumber: Yup.string().min(10, 'Must be at least 10 digits').required("Phone Number is required"),
    })
  });

  return (
    <>
      <div className="ReservationSectionBackground">
        <div className="ReservationForm">
          <h1 className="ReservationFormTitle">Reserve Your Table</h1>
          <div className="ReservationFormContainer">
            <form onSubmit={formik.handleSubmit}>
              <div className="FormRow">
                <div className="FormSection">
                  <label className="FormLabel" for="FullName">
                    Full Name
                  </label>
                  <input type="text" id="FullName" name="FullName" value={formik.values.FullName} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                  <div className="error">{formik.touched.FullName && formik.errors.FullName}</div>
                </div>
                <div className="FormSection">
                  <label className="FormLabel" for="FullName">
                    Seat Selection
                  </label>
                  <select id="SeatSelection" name="SeatSelection" value={formik.values.SeatSelection} onChange={formik.handleChange}>
                    <option value="indoors">Indoors</option>
                    <option value="outdoors">Outdoors</option>
                  </select>
                  <div className="error">{formik.touched.SeatSelection && formik.errors.SeatSelection}</div>
                </div>
              </div>

              <div className="FormRow">
                <div className="FormSection">
                  <label className="FormLabel" for="Date">
                    Date
                  </label>
                  <input type="date" id="Date" name="Date" value={formik.values.Date} onChange={formik.handleChange} />
                  <div className="error">{formik.touched.Date && formik.errors.Date}</div>
                </div>
                <div className="FormSection">
                  <label className="FormLabel" for="NumberOfGuests">
                    Number of Guests
                  </label>
                  <input
                    type="number"
                    min={1}
                    id="NumberOfGuests"
                    name="NumberOfGuests"
                    value={formik.values.NumberOfGuests} onChange={formik.handleChange}
                  />
                  <div className="error">{formik.touched.NumberOfGuests && formik.errors.NumberOfGuests}</div>
                </div>
              </div>

              <div className="FormRow">
                <div className="FormSection">
                  <label className="FormLabel" for="Email">
                    Email
                  </label>
                  <input type="text" id="Email" name="Email" value={formik.values.Email} onChange={formik.handleChange}/>
                  <div className="error">{formik.touched.Email && formik.errors.Email}</div>
                </div>
                <div className="FormSection">
                  <label className="FormLabel" for="PhoneNumber">
                    Phone Number
                  </label>
                  <input type="text" id="PhoneNumber" name="PhoneNumber" value={formik.values.PhoneNumber} onChange={formik.handleChange}/>
                  <div className="error">{formik.touched.PhoneNumber && formik.errors.PhoneNumber}</div>
                </div>
              </div>

              <div className="FormRow Notes">
                <div className="FormSection">
                  <label className="FormLabel" for="SpecialNotes">
                    Special Notes
                  </label>
                  <textarea rows={6} id="SpecialNotes" name="SpecialNotes" value={formik.values.SpecialNotes} onChange={formik.handleChange}/>
                  <div className="error">{formik.touched.SpecialNotes && formik.errors.SpecialNotes}</div>
                </div>
              </div>

              <div className="FormRow">
                <div className="FormSection">
                  <input
                    className="FormSubmitButton"
                    type="submit"
                    value="Reserve Table"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
