function clickTab(node) {
      
    
    
    node.classList.add('active');
    
    
    for (const tab of document.getElementsByClassName('tab')) {
      if (tab.id !== node.id) {
        tab.classList.remove('active');
      }
    }
    
  }
