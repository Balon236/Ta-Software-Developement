

export default function Add(){
return(
     <div className="bg-white border border-brand-500 w-full   rounded-md p-8">
  <h3 className="text-xl font-semibold mb-6 text-gray-600">Enter New Progress</h3>
  <form className="space-y-4">
    <div>
        <input 
            type="text" 
            id="name" 
            name="name"
            placeholder="Your Name"
            className="w-full mb-4 px-3 py-2 border border-brand-500 rounded-md  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      <textarea 
        id="message"
        placeholder="Progress" 
        className="bg-white border mb-4 border-brand-500 text-gray-900 rounded-md w-full p-3 min-h-[120px] resize-vertical focus:ring-2 focus:ring-white focus:outline-none"
        rows={4}
      />
      <input 
            type="date" 
            id="date" 
            name="date"
            placeholder="Date"
            className="w-full px-3 mb-4 py-2 border border-brand-500 rounded-md  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
    </div>
    <button 
  type="submit"
  className="w-1/2 rounded-md bg-brand-500 text-white font-medium px-6 py-3 hover:bg-gray-50 focus:ring-2 focus:ring-white focus:outline-none transition-colors mx-auto block"
>
  Save
</button>
  </form>
</div>
)
}