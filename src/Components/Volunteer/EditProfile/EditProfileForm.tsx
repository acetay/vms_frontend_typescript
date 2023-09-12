import { Link } from 'react-router-dom';
import storage from '../../../CustomHooks/LocalStorage';

interface FormProps {
  name: string;
  email: string;
  contact: string;
  address: string;
  //   referrerName: string;
  //   referrerContact?: number | string;
  education: string;
  occupation: string;
  profilePicture: string;
  pastExperience: string;
  dateOfBirth: string;
  language: string;
  language2: string;
  language3: string;
  changeHandler: (e: any) => void;
  submitHandlerToEdit: () => void;
}

function EditProfileForm({
  name,
  email,
  contact,
  address,
  pastExperience,
  dateOfBirth,
  education,
  occupation,
  profilePicture,
  language,
  language2,
  language3,
  changeHandler,
  submitHandlerToEdit,
}: FormProps) {
  const id = storage.get('id') as string;
  return (
    <div className="w-auto">
      <div className="flex flex-col">
        {/* 1st Row Inputs */}
        <div className="flex flex-col justify-center items-center space-y-4 md:flex-row md:items-baseline md:space-x-8">
          <div className="flex flex-col">
            <label className="pb-2 pl-2 font-semibold text-sm" htmlFor="name">
              Name:
            </label>
            <input
              id="name"
              name="name"
              value={name}
              onChange={changeHandler}
              placeholder="Your full name"
              type="text"
              className="input input-bordered input-info w-[75vw] md:w-[35vw] input-md"
            />
          </div>
          <div className="flex flex-col">
            <label className="pb-2 pl-2 font-semibold text-sm" htmlFor="email">
              Email:
            </label>
            <input
              id="email"
              name="email"
              value={email}
              onChange={changeHandler}
              placeholder="Your personnal email address"
              type="email"
              className="input input-bordered input-info w-[75vw] md:w-[35vw] input-md"
            />
          </div>
        </div>
        {/* 2nd Row Inputs */}
        <div className="flex flex-col justify-center items-center mt-4 space-y-4 md:flex-row md:items-baseline md:space-x-8">
          <div className="flex flex-col">
            <label
              className="pb-2 pl-2 font-semibold text-sm"
              htmlFor="contact"
            >
              Contact Number:
            </label>
            <input
              id="contact"
              name="contact"
              value={contact}
              onChange={changeHandler}
              type="text"
              placeholder="Your contact number"
              className="input input-bordered input-info w-[75vw] md:w-[35vw] input-md"
            />
          </div>
          <div className="flex flex-col">
            <label
              className="pb-2 pl-2 font-semibold text-sm"
              htmlFor="address"
            >
              Residential Address:
            </label>
            <input
              id="address"
              name="address"
              value={address}
              onChange={changeHandler}
              type="text"
              placeholder="Your residential address"
              className="input input-bordered input-info w-[75vw] md:w-[35vw] input-md"
            />
          </div>
        </div>
        {/* 3rd Row Inputs */}

        <div className="flex justify-center items-baseline mt-6 space-x-7 lg:justify-start">
          <div className="flex flex-col w-[35vw] lg:w-[15vw]">
            <label
              className="pb-2 pl-2 font-semibold text-sm"
              htmlFor="dateOfBirth"
            >
              Birthday:
            </label>
            <input
              id="dateOfBirth"
              name="dateOfBirth"
              value={dateOfBirth}
              onChange={changeHandler}
              // placeholder="current yr age"
              type="date"
              className="input input-bordered input-info input-sm "
            />
          </div>
          <div className="flex flex-col w-[37vw] lg:w-[15vw]">
            <label
              className="pb-2 pl-2 font-semibold text-sm"
              htmlFor="education"
            >
              Education:
            </label>
            <select
              name="education"
              value={education}
              onChange={changeHandler}
              className="select select-info max-w-xs select-sm text-sm font-normal"
            >
              <option selected>Highest Education</option>
              <option>Degree or higher</option>
              <option>Diploma</option>
              <option>A Levels</option>
              <option>ITE</option>
              <option>O Levels</option>
              <option>N Levels</option>
              <option>Secondary</option>
              <option>Primary</option>
            </select>
          </div>

          <div className="flex space-x-3"></div>
        </div>

        {/* 4th Row Inputs */}
        <div className="flex flex-col mt-6 md:flex-row sm:justify-start">
          {/* Languages */}
          {/* Column 1 */}
          <div className="flex flex-col">
            <label
              className="pb-2 pl-2 font-semibold text-sm"
              htmlFor="referrerContact"
            >
              Languages:
            </label>
            <div className="flex space-x-2">
              <div>
                <select
                  name="language"
                  value={language}
                  onChange={changeHandler}
                  className="select select-info w-full max-w-xs select-sm text-sm font-normal"
                >
                  <option selected>1st choice</option>
                  <option>English</option>
                  <option>Chinese</option>
                  <option>Hokkien</option>
                  <option>Cantonese</option>
                  <option>Teochew</option>
                  <option>Malay</option>
                  <option>Hindi</option>
                </select>
              </div>
              <div>
                <select
                  name="language2"
                  value={language2}
                  onChange={changeHandler}
                  className="select select-info w-full max-w-xs select-sm text-sm font-normal"
                >
                  <option selected>2nd choice</option>
                  <option>English</option>
                  <option>Chinese</option>
                  <option>Hokkien</option>
                  <option>Cantonese</option>
                  <option>Teochew</option>
                  <option>Malay</option>
                  <option>Hindi</option>
                </select>
              </div>
              <div>
                <select
                  name="language3"
                  value={language3}
                  onChange={changeHandler}
                  className="select select-info w-full max-w-xs select-sm text-sm font-normal"
                >
                  <option selected>3rd choice</option>
                  <option>English</option>
                  <option>Chinese</option>
                  <option>Hokkien</option>
                  <option>Cantonese</option>
                  <option>Teochew</option>
                  <option>Malay</option>
                  <option>Hindi</option>
                </select>
              </div>
            </div>
          </div>
          {/* Column 2 */}
          <div className="flex flex-col mt-4 md:mt-0 md:ml-12">
            <label
              className="pb-2 pl-2 font-semibold text-sm"
              htmlFor="referrerContact"
            >
              Occupation
            </label>
            <div className="flex space-x-3 justify-start items-center">
              <div className="flex flex-col">
                <input
                  id="occupation"
                  name="occupation"
                  value={occupation}
                  onChange={changeHandler}
                  placeholder="Your occupation"
                  className="input input-bordered input-info input-sm w-[35vw] md:w-[10vw]"
                />
              </div>
              <div className="flex flex-col">
                <input
                  id="profilePicture"
                  name="profilePicture"
                  value={profilePicture}
                  onChange={changeHandler}
                  placeholder="upload a profile image"
                  className="input input-bordered input-info input-sm"
                />
              </div>
            </div>
          </div>
        </div>
        {/* 5th row Inputs */}
        <div className="flex space-x-8 mt-4">
          <div className="flex flex-col w-full">
            <label
              className="pb-2 pl-2 font-semibold text-sm"
              htmlFor="experience"
            >
              Past Experience:
            </label>
            <textarea
              name="pastExperience"
              id="pastExperience"
              value={pastExperience}
              onChange={changeHandler}
              className="textarea textarea-info w-[90%] md:w-full textarea-md"
              placeholder="Tell us about your past volunteering experience, if any."
            ></textarea>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-4 pr-6 space-x-8">
        <Link to={`/volunteer/profile/${id}`}>
          <p className="btn btn-accent btn-sm cursor-pointer">Cancel</p>
        </Link>
        <button
          onClick={submitHandlerToEdit}
          className="btn btn-secondary btn-sm"
        >
          Edit
        </button>
      </div>
    </div>
  );
}

export default EditProfileForm;
