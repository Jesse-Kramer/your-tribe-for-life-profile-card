<script>
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<section class="card-container">

    <header>
        <img src="{data.person.avatar}" alt="{data.person.name} {data.person.surname}'s Avatar">
        <h1>{data.person.name} {data.person.surname}</h1>
        <h2>Front-end Design & Developer</h2>
        <div class="tag-list">
            <span class="tag tag--student">Student</span>
            <span class="tag tag--developer">Developer</span>
        </div>
    </header>
    
    <hr>
    
    <main>
        <ul>
            <li class="main-list-item">
                <a href="{data.person.website}" target="_blank" rel="noopener noreferrer"> {data.person.website} </a>
            </li>
            <li class="main-list-item">
                <a href="mailto:jesse-kramer@hva.nl" target="_blank"> jesse-kramer@hva.nl </a>
            </li>
            <li class="main-list-item">
                <a href="https://github.com/Jesse-Kramer" target="_blank" rel="noopener noreferrer"> View my GitHub </a>
            </li>
        </ul>
    </main>
    
    <hr>
    
    <footer>
        <a href="https://www.instagram.com/jessekr" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://www.linkedin.com/in/jesse-kramer15" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    </footer>
    
</section>