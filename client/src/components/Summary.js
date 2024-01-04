const Summary = () => {
  return (
    <div>
      <label
        for="summary"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Summary
      </label>
      <textarea
        id="summary"
        rows="4"
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Write your Summary here..."
      ></textarea>
      <div class="flex items-center justify-between py-3 border-t dark:border-gray-600">
        <button
          type="submit"
          className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Summary;
