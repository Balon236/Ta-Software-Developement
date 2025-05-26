export default function SendMessage(){
    return (
       <div className="bg-brand-500 w-full text-white rounded-md p-8">
  <h3 className="text-xl font-semibold mb-6">Message Case Manager</h3>
  <form className="space-y-4">
    <div>
      <label htmlFor="message" className="block text-sm font-medium mb-2">
        Enter Message
      </label>
      <textarea 
        id="message"
        placeholder="Write your message here..." 
        className="bg-white text-gray-900 rounded-md w-full p-3 min-h-[120px] resize-vertical focus:ring-2 focus:ring-white focus:outline-none"
        rows={8}
      />
    </div>
    <button 
  type="submit"
  className="w-1/2 rounded-md bg-white text-brand-500 font-medium px-6 py-3 hover:bg-gray-50 focus:ring-2 focus:ring-white focus:outline-none transition-colors mx-auto block"
>
  Send Message
</button>
  </form>
</div>
    )
}