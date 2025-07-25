document.addEventListener('DOMContentLoaded', function() {
            const tabs = document.querySelectorAll('.tab:not(.refresh-btn)');
            const refreshBtn = document.querySelector('.refresh-btn');
            
            tabs.forEach(tab => {
                tab.addEventListener('click', function() {
                    // Remove active class from all tabs
                    tabs.forEach(t => t.classList.remove('active'));
                    
                    // Add active class to clicked tab
                    this.classList.add('active');
                    
                    // Hide all tab contents
                    document.querySelectorAll('.tab-content').forEach(content => {
                        content.classList.remove('active');
                    });
                    
                    // Show the corresponding tab content
                    const tabId = this.getAttribute('data-tab');
                    document.getElementById(tabId).classList.add('active');
                });
            });
            
            // Refresh button functionality
            refreshBtn.addEventListener('click', function() {
                location.reload();
            });
        });