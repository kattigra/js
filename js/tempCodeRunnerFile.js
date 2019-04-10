const strTrim = item.textContent.trim();
        item.textContent = strTrim;

        if (item.textContent.length < count) {
            return;
        } else {
            const str = item.textContent.slice(0, count+1) + "...";
            item.textContent = str;
        }