import React from 'react';

const FAQ = () => {
    return (
        <div className='max-w-6xl mx-auto mb-12'>
            <h2 className='text-2xl font-bold mb-6'>Frequently Asked Questions(FAQ)</h2>
            <div className="join join-vertical w-full">
                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" defaultChecked />
                    <div className="collapse-title text-xl font-medium">How can I submit a game review?</div>
                    <div className="collapse-content">
                    <p>To submit a game review, login/register to this website. Once logged in, navigate to the "Add Review" page, fill in the required details (game title, review description, rating, etc.), and click the "Submit Review" button. You’ll receive a success message upon completion.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium"> Can I edit or delete my reviews?</div>
                    <div className="collapse-content">
                    <p>Currently, users can edit or delete their reviews by navigating to the "My Reviews" section on their profile. Click the "Edit" or "Delete" button next to the review you want to modify.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium"> Can I rate a game without submitting a detailed review?</div>
                    <div className="collapse-content">
                    <p>No, ratings are part of the review submission process. A detailed review is required to provide meaningful feedback alongside the rating.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">Is there a limit to how many reviews I can submit?</div>
                    <div className="collapse-content">
                    <p>There is no limit to the number of reviews you can submit. However, each review must be for a unique game.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;