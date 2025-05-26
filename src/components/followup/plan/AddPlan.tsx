

export default function AddPlan(){
return(
     <div className="bg-white border border-brand-500 w-full   rounded-md p-8">
  <h3 className="text-xl font-semibold mb-6 text-gray-600">Enter New Break Point Plan</h3>
  <form className="space-y-4">
    <div>
      <label htmlFor="message" className="block text-sm font-medium mb-2">
        Plan
      </label>
      <textarea 
        id="message"
        placeholder="Write your message here..." 
        className="bg-white border border-brand-500 text-gray-900 rounded-md w-full p-3 min-h-[120px] resize-vertical focus:ring-2 focus:ring-white focus:outline-none"
        rows={8}
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