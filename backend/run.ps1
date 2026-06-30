# Use JDK 11+ for Spring Boot (project targets Java 11; JAVA_HOME may point to JDK 8).
$jdkCandidates = @(
    "$env:ProgramFiles\Java\jdk-11.0.30",
    "$env:ProgramFiles\Java\jdk-17.0.18",
    "$env:ProgramFiles\Java\latest\jdk-11",
    "$env:ProgramFiles\Java\latest\jdk-17"
)

$needsJdk = $true
if ($env:JAVA_HOME -and (Test-Path "$env:JAVA_HOME\bin\javac.exe")) {
    $versionOutput = & "$env:JAVA_HOME\bin\java.exe" -version 2>&1 | Out-String
    if ($versionOutput -match 'version "1[1-9]\.' -or $versionOutput -match 'version "[2-9][0-9]\.') {
        $needsJdk = $false
    }
}

if ($needsJdk) {
    foreach ($jdk in $jdkCandidates) {
        if (Test-Path "$jdk\bin\java.exe") {
            $env:JAVA_HOME = $jdk
            break
        }
    }
}

if (-not $env:JAVA_HOME -or -not (Test-Path "$env:JAVA_HOME\bin\java.exe")) {
    Write-Error "JDK 11 or newer is required. Install JDK 11+ and set JAVA_HOME, or install to Program Files\Java."
    exit 1
}

$env:PATH = "$env:JAVA_HOME\bin;$env:PATH"
Set-Location $PSScriptRoot
mvn spring-boot:run @args
